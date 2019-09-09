require 'minitest/autorun'
require 'yaml'

class TestHelpers
  def self.load_yaml(file_path)
    YAML.load(File.read(file_path))
  end

  def self.get_pages(dir)
    Dir.glob(dir + '/**/*.md')
  end

  def self.get_page_yaml(file_path)
    content = File.read(file_path)
    YAML.load( content.split('---')[1] )
  end  
end