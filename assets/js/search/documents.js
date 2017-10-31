---
process: true
---
module.exports = [
  {%- for item in site.about %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.awards %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.events %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.guides %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.methods %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.news %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.opportunities %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.projects %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    },
  {%- endfor %}

  {%- for item in site.resources %}
    {
      "url": {{ item.url | prepend: site.baseurl | jsonify }},
      "content": {{ item.content | escape | jsonify }},
      "title": {{ item.title | escape | jsonify }},
      "teaser": {{ item.content | truncatewords: 70 | strip_html | jsonify }},
      "seconds": {{ item.date | date: '%s' | jsonify }}
    }

    {%- if forloop.last == false %},{% endif %}

  {%- endfor %}
]