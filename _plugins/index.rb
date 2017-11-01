##
# Index site content whenever the site builds
##

Jekyll::Hooks.register :site, :post_write do |jekyll|
  system('npm run index')
end