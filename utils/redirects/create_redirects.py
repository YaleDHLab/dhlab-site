from shutil import copy, rmtree
from glob2 import glob
import os

routes = {
  "projects": "projects.html",
  "organizations": "/resources.html",
  "yale-dh": "/about.html",
  "projects/athena": "projects/athena.html",
  "projects/babylonian-collection-digital-imaging": "projects/babylonian.html",
  "projects/cuneiform-commentaries-project": "projects/cuneiform.html",
  "projects/decretum-gratiani": "projects/decretum.html",
  "projects/desmm": "http://ydc2.yale.edu/research-support/digitally-enabled-scholarship-medieval-manuscripts",
  "projects/digital-himalaya": "projects/himalaya.html",
  "projects/historians-eye": "projects/historians_eye.html",
  "projects/joseph-brodsky-dh-lab": "projects/dhrees.html",
  "projects/modernism-lab": "projects/modernism_lab.html",
  "projects/multilateral-moneyball": "projects/multilateral_moneyball.html",
  "projects/photogrammar": "projects/photogrammar.html",
  "projects/slavery-and-abolition-portal": "projects/slavery_and_abolition.html",
  "projects/ten-thousand-rooms": "projects/ten_thousand_rooms.html",
  "projects/works-jonathan-edwards-online": "projects/edwards.html",
}

servers = ['s3://digitalhumanities.yale.edu', 's3://dhlab.yale.edu']

for c, i in enumerate(routes):
  split = i.split('/')
  dirs = '/'.join(split[:-1])
  file = split[-1]
  if dirs:
    try:
      os.makedirs(dirs)
    except:
      pass
  try:
    outpath = dirs + '/' + file
    outpath = outpath.lstrip('/')
    os.system(' echo hello >> ' + outpath)
  except Exception as exc:
    print(i, exc)

  for j in servers:
    cmd = 'aws s3 cp ' + i + ' '
    cmd += j + '/' + i + ' '
    cmd += '--acl public-read '
    cmd += '--website-redirect "' + j.replace('s3://', 'http://') + '/' + routes[i].lstrip('/') + '" '
    os.system(cmd)

  if '/' in outpath:
    if '/' in dirs:
      _dir = dirs.split('/')[0]
    else:
      _dir = dirs
    rmtree(_dir)
  else:
    os.remove(outpath)