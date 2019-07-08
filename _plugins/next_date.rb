
require 'date'

Jekyll::Hooks.register :events, :pre_render do |document|

    today = Date.today

    if document.data.key?('dates')
        document.data['dates'].each do |dt|
            puts "next_date plugin: Overriding date field in '#{document.basename}' from #{document.data['date']} to #{dt.to_time}"
            document.data['date'] = dt.to_time
            if dt >= today
                break
            end
        end
    elsif document.data.key?('date')
        document.data['date'] = document.data['date']
    else 
        # document.data['next_date'] = today + 100
    end
  
  end