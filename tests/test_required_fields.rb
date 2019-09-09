require 'minitest/autorun'
require './tests/test_helpers'

class TestMeme < Minitest::Test
  def test_that_all_required_fields_are_present
    schema = TestHelpers.load_yaml('_data/schema.yaml')
    schema.each do |page_type, values|
      TestHelpers.get_pages(page_type).each do |page|
        page_yaml = TestHelpers.get_page_yaml(page)
        values['required'].each do |val|
          print ' * validating ', page, ' contains required field ', val, "\n"
          page_has_val = if page_yaml[val].nil? then false else true end
          assert_equal(true, page_has_val)
        end
      end
    end
  end
end