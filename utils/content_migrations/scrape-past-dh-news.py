from bs4 import BeautifulSoup
from random import randint
import urllib.request, os, json, glob, codecs

def get_html(url):
  print(url)
  with urllib.request.urlopen(url) as response:
    return response.read()

def parse_tags(html):
  soup = BeautifulSoup(html)
  content = soup.find('div', {'class': 'field-name-body'})
  
  attributes = ['class', 'id', 'name', 'style']
  for attribute in attributes:
    del content[attribute]

  # delete tag attributes
  for tag in content.findChildren():
    for attribute in attributes:
      del tag[attribute]
  return content.prettify()

def format_teaser(teaser):
  return teaser.replace('"','').replace('...','')

def get_thumbnail():
  return '/assets/images/placeholder-' + str(randint(0,9)) + '.png'

def get_front_matter(obj):
  front_matter =  '---' + '\n'
  front_matter += 'title: ' + obj['title'] + '\n'
  front_matter += 'date: ' + obj['date'] + '\n'
  front_matter += 'thumbnail: ' + get_thumbnail() + '\n'
  front_matter += 'caption: ' + obj['alt'] + '\n'
  front_matter += 'categories: \n  - announcements' + '\n'
  front_matter += 'spotlight: false ' + '\n'
  front_matter += 'image_layout: landscape' + '\n'
  front_matter += 'teaser: "' + format_teaser(obj['teaser']) + '"\n'
  front_matter += '---' + '\n'
  return front_matter

def clean_title(title):
  title = '-'.join(title.split()).lower()
  title = title.replace('@','at')
  for i in ['“', '”', '"', "'", ']', '[', '#', '!', ':']:
    title = title.replace(i, '')
  for i in [',', '/', '\\', '--']:
    title = title.replace(i, '-')
  return title + '.md'

def write_yaml(obj, html):
  title = clean_title(obj['title'])
  front_matter = get_front_matter(obj)
  with codecs.open('news/' + title, 'w', 'utf8') as out:
    out.write(front_matter + '\n\n' + html)

data = []
max_page = 14
url = 'http://web.library.yale.edu/dhlab/news?page='

for i in range(max_page+1):
  html = get_html(url + str(i))
  soup = BeautifulSoup(html)
  results = soup.find_all('div', { 'class' : 'views-row' })
  for result in results:
    child = result.find('div', { 'class': 'views-field-field-news-image' })
    
    result_url = 'http://web.library.yale.edu' + result.find('div', { 
      'class': 'views-field-title' }).find('a')['href']

    try:
      date = result.find('span', { 'class': 'date-display-single' }).string
    except:
      date = ''

    try:
      src = child.find('img')['src']
    except:
      src = ''

    try:
      alt = child.find('img')['alt']
    except:
      alt = ''

    data.append({
      'url': result_url,
      'date': date,
      'title': result.find('div', { 'class': 'views-field-title' }).find('a').string,
      'teaser': result.find('span', { 'class': 'field-content' }).string,
      'img': src,
      'alt': alt,
    })

  with open('dhlab-news.json', 'w') as out:
    json.dump(data, out)

##
# Get full page content
##

for i in ['news', 'events']:
  if not os.path.exists(i):
    os.makedirs(i)

for i in data:
  html = get_html(i['url'])
  clean_html = parse_tags(html) 
  write_yaml(i, clean_html)
