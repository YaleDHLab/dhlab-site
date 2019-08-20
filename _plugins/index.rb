##
# Index site content whenever the site builds
##

Jekyll::Hooks.register :site, :post_write do |site|
  if site.config['create_index']
    system('npm run index')
  end
end