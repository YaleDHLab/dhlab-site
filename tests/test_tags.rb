require 'minitest/autorun'
require 'yaml'

def get_pages(dir)
  Dir.glob(dir + '/**/*.md')
end

def get_page_yaml(file_path)
  content = File.read(file_path)
  YAML.load( content.split('---')[1] )
end

def get_taxonomy
  taxonomy = File.read('_data/taxonomy.yaml')
  YAML.load(taxonomy)
end

class TestMeme < Minitest::Test

  def test_all_news_and_events_tags_are_allowed
    taxonomy = get_taxonomy()
    ['_events', '_news'].each do |page_type|
      ['categories', 'tags'].each do |metadata_type|
        # get the markdown for each page within this pagetype
        get_pages(page_type).each do |f|
          # provide input information on standard out
          print ' * validating ', metadata_type, ' in ', f, "\n"
          page_yaml = get_page_yaml(f)
          # validate all `metadata_type` values exist within `values`
          if page_yaml.key?(metadata_type)
            page_yaml[metadata_type].each do |val|
              assert_includes(taxonomy['news_and_events'][metadata_type], val)
            end
          end
        end
      end
    end
  end

  def test_all_project_tags_are_allowed
    taxonomy = get_taxonomy()
    ['tags', 'categories'].each do |metadata_type|
      get_pages('_projects').each do |f|
        # provide input information on standard out
        print ' * validating ', metadata_type, ' in ', f, "\n"
        page_yaml = get_page_yaml(f)
        # validate all `metadata_type` values exist within `values`
        if page_yaml.key?(metadata_type)
          page_yaml[metadata_type].each do |val|
            assert_includes(taxonomy['projects'][metadata_type], val)
          end
        end
      end
    end
  end

  def test_that_all_required_fields_are_present
    true
  end
end