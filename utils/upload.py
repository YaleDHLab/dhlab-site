import os, sys

def gzip():
  cmd =  "find " + _site + " "
  cmd += "\( "
  for c, i in enumerate(gzipped_filetypes):
    cmd += " -iname '*." + i + "' "
    if c != len(gzipped_filetypes) - 1:
      cmd += ' -o '
  cmd += "\) "
  cmd += "-exec gzip -9 -n {} \; -exec mv {}.gz {} \;"
  os.system(cmd)

def upload(bucket, gzipped=False, filetype=None):
  cmd =  "aws s3 cp " + _site + " " + bucket + " "
  cmd += "--acl public-read "
  cmd += "--recursive "
  cmd += "--metadata-directive='REPLACE' "
  cmd += "--profile yale-admin "
  cmd += "--cache-control max-age=604800 "

  if gzipped and filetype:
    cmd += "--content-encoding 'gzip' "

    if filetype == 'html':
      cmd += "--exclude '*' --include '*.html' "
      cmd += "--content-type 'text/html' "

    elif filetype == 'css':
      cmd += "--exclude '*' --include '*.css' "
      cmd += "--content-type 'text/css' "

    elif filetype == 'js':
      cmd += "--exclude '*' --include '*.js' "
      cmd += "--content-type 'text/javascript' "

    elif filetype == 'json':
      cmd += "--exclude '*' --include '*.json' "
      cmd += "--content-type 'application/json' "

    elif filetype == 'svg':
      cmd += "--exclude '*' --include '*.svg' "
      cmd += "--content-type 'image/svg+xml' "

    else:
      Exception(' * unrecognized filetype', filetype)

  else:
    cmd += "--include '*' "
    for i in gzipped_filetypes:
      cmd += "--exclude '*." + i + "' "
  os.system(cmd)

def upload_all_gzipped(bucket):
  for filetype in gzipped_filetypes:
    upload(bucket, gzipped=True, filetype=filetype)

# assume script is run via npm run stage|deploy
_site = os.path.join('_site/')

# identify gzipped file extensions
gzipped_filetypes = ['html', 'css', 'js', 'json', 'svg']

# rebuild content
os.system('npm run build')

# gzip appropriate assets
gzip()

# determine whether we're staging or deploying
if sys.argv[1] == 'staging':
  bucket = 's3://dhlab-staging/'
  upload(bucket)
  upload_all_gzipped(bucket)

elif sys.argv[1] == 'production':
  for bucket in ['s3://dhlab.yale.edu/', 's3://digitalhumanities.yale.edu/']:
    upload(bucket)
    upload_all_gzipped(bucket)
