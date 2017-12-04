import glob, os, yaml, shutil

def get_command(infile, w, h, outfile):
  w = str(w)
  h = str(h)
  command = 'convert ' + infile
  command += ' -resize "' + w + 'x' + h + '^"'
  command += ' -gravity center'
  command += ' -crop ' + w + 'x' + h + '+0+0'
  command += ' -sampling-factor 4:2:0'
  command += ' -strip'
  command += ' -quality 85'
  command += ' ' + outfile
  return command

def get_out_path(path, name_ext, subdir):
  name = os.path.basename(path)
  out_name = name.replace('.jpg', '')
  out_name = out_name.replace('.png', '')
  out_name = out_name.replace('-thumb', '')
  out_name += name_ext
  out_dir = '/'.join(path.split('/')[:-2]).lstrip('/')
  return out_dir + '/' + subdir + '/' + out_name + '.jpg'

##
# Projects
##

for i in glob.glob('_projects/*'):
  with open(i) as f:
    f = f.read().split('---')[1]
    metadata = yaml.load(f)

    ##
    # Archive projects - make 2x thumbnail for 266 x 266 display
    ##

    if 'layout' in metadata.keys() or 'funded' in metadata.keys():
      thumb = metadata['thumbnail'].lstrip('/')
      out_path = get_out_path(thumb, name_ext='-thumb', subdir='archive-thumbs')
      cmd = get_command(thumb, 532, 532, out_path)
      os.system(cmd)

    ##
    # Projects - make 2x thumbnail for 940 x 472 display
    ##

    else:
      image = metadata['image'].lstrip('/')
      name = os.path.basename(image)
      out_path = get_out_path(image, name_ext='-thumb', subdir='thumbs')
      cmd = get_command(image, 1880, 944, out_path)
      os.system(cmd)
