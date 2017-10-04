import glob, shutil, yaml, datetime

months = {
  'January': '01',
  'February': '02',
  'March': '03',
  'April': '04',
  'May': '05',
  'June': '06',
  'July': '07',
  'August': '08',
  'September': '09',
  'October': '10',
  'November': '11',
  'December': '12'
}

def parse_date(s):
  if isinstance(s, datetime.date):
    return s

  date_start, year = [j.strip() for j in s.split(',')]
  month, day = [j.strip() for j in date_start.split(' ')]
  month = months[month]
  if len(day) == 1:
    day = '0' + day
  return year + '-' + month + '-' + day

for i in ['_events', '_news']:
  for j in glob.glob(i + '/*/*'):
    with open(j) as f:
      split_file = f.read().split('---')
      front_matter = split_file[1]
      text_content = split_file[2]
      y = yaml.load(front_matter)
      
      # get the new file path
      split_path = j.split('/')
      date = str( parse_date(y['date']) )
      new_file_name = '/'.join( split_path[:-1] ) + '/' + date + '-' + split_path[-1]
      
      shutil.move( j, new_file_name )
