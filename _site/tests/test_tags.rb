require 'minitest/autorun'
require './tests/test_helpers'

class TestMeme < Minitest::Test
  def test_all_news_and_events_tags_are_allowed
    taxonomy = TestHelpers.load_yaml('_data/taxonomy.yaml')
    ['_events', '_news'].each do |page_type|
      ['categories', 'tags'].each do |metadata_type|
        # get the markdown for each page within this pagetype
        TestHelpers.get_pages(page_type).each do |f|
          # provide input information on standard out
          print ' * validating ', metadata_type, ' in ', f, "\n"
          page_yaml = TestHelpers.get_page_yaml(f)
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
    taxonomy = TestHelpers.load_yaml('_data/taxonomy.yaml')
    ['tags', 'categories'].each do |metadata_type|
      TestHelpers.get_pages('_projects').each do |f|
        # provide input information on standard out
        print ' * validating ', metadata_type, ' in ', f, "\n"
        page_yaml = TestHelpers.get_page_yaml(f)
        # validate all `metadata_type` values exist within `values`
        if page_yaml.key?(metadata_type)
          page_yaml[metadata_type].each do |val|
            assert_includes(taxonomy['projects'][metadata_type], val)
          end
        end
      end
    end
  end
end