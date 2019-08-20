##
# Call webpack whenever the site resets
##

Jekyll::Hooks.register :site, :post_write do |site|
  if site.config['compress_js']
    system('npm run compress')
  end
end