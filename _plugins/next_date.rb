
require 'date'

Jekyll::Hooks.register :events, :pre_render do |document|

    today = Date.today

    if document.data.key?('dates')
        document.data['dates'].each do |date|
            dt = date
            puts "next_date plugin: Overriding document date from #{document.data['date']} to #{dt}"
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