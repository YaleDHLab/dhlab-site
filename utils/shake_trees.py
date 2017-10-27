#!/usr/bin/env python

'''
from source:

pip install selenium
pip install beautifulsoup4
brew install phantomjs

usage: python shake_trees.py '_site' '.parent .child'
'''

from bs4 import BeautifulSoup
from selenium import webdriver
import sys, copy, multiprocessing, os, fnmatch

def clean_href(href):
  return href.split('#')[0].split('?')[0]

def get_web_urls(all_links, visited):
  recurse = False
  for link in copy.copy(all_links):
    if link not in visited:
      visited.add(link)
      driver.get(link)
      for tag in driver.find_elements_by_tag_name('a'):
        href = clean_href(tag.get_attribute('href'))
        if domain in href and href not in visited:
          recurse = True
          all_links.add(href)
  if recurse:
    return get_web_urls(all_links, visited)
  else:
    print(all_links, visited)
    return all_links

def get_static_site_urls():
  matches = []
  for root, dirnames, filenames in os.walk(root_url):
    for filename in fnmatch.filter(filenames, file_match):
      matches.append(os.path.join(root, filename))
  return matches

if __name__ == '__main__':

  # parse command line arguments
  root_url = sys.argv[1]
  css_selector = sys.argv[2]

  # globals
  domain = root_url
  static_site = False if 'http' in root_url else True
  file_match = '*.html'
  
  # initialize the phantom driver
  driver = webdriver.PhantomJS()
  driver.set_window_size(1000, 1000)

  if static_site:
    urls = get_static_site_urls()
  else:
    driver.get( root_url )
    urls = get_web_urls( set([root_url]), set() )

  for url in urls:
    if static_site:
      url = 'file://' + os.path.join(os.getcwd(), url)
    driver.get(url)
    soup = BeautifulSoup( driver.page_source, 'html.parser' )
    if soup.select_one(css_selector):
      print('match on', url)
