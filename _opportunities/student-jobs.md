---
title: Student Jobs
order: 1
image: '/assets/images/banners/sterling-nave.jpg'
caption: >
  The Nave in Sterling Memorial Library.

application_text: >
  Apply to join us as one of our 2018 student programmers or designers.

deadline: Ongoing
application_url: mailto:dhlab@yale.edu
class: hide-color-hr
---

<div class='center-column'>
  <div class='two-column-container one-third-width top-text'>
    <div class='left-column'>
      {% include sidebars/opportunities_left_sidebar.html page=page %}
    </div>
    <div class='right-column'>
      {% include text/mobile_section_title.html
        category='Opportunities'
        title=page.title
      %}

      <p>If you have programming skills and an interest in humanistic data, apply to work in the Digital Humanities Lab! We often hire Yale undergraduate and graduate students to work on a variety of exciting projects that are underway in the lab.</p>

      <strong>Digital Humanities Lab Assistants</strong>
      <p>Every semester the Digital Humanities Lab funds projects that require different levels of programming expertise. If you would like to be considered for one of these positions when they open up, please <a href='mailto:dhlab@yale.edu'>email the DHLab</a> your resume/CV, along with a brief statement of interest.</p>

      <strong>Digital Scholarship Services Consultants</strong>
      <p>Yale Digital Scholarship Services—which includes the Digital Humanities Lab and StatLab—hires graduate students annually to join our team as Digital Scholarship consultants. Whether you use machine learning to find aesthetic patterns in 18th-century paintings, interactive data visualizations to track instances of textual reuse in Classical literature, or big data technologies to identify systemic drivers of gene expression, we want to hear from you.</p>

      <p>Specific responsibilities vary, but consultants should expect:
        <ul>
          <li>to meet with Yale community members from the undergraduate level to the faculty level to provide guidance on research questions in a 1-on-1 or group setting
          </li>
          <li>to use your proficiency in digital humanities, statistics, geospatial statistics, or data analysis</li>
          <li>to answer common questions across various disciplines</li>
          <li>to use your expertise on specific digital humanities, statistics, geospatial statistics, or data analysis topics, and to act as a point person for related questions</li>
          <li>to think on your feet, quickly assess the needs of patrons, and help develop a recommendation for how they should proceed given their subject area, background, and timeline</li>
          <li>to hone your teaching skills by developing and leading workshops on specific software applied to digital humanities, statistics, geospatial statistics, and data analysis</li>
        </ul>
      </p>
    </div>
  </div>
  {% assign items = site.news | where: 'categories', 'student jobs' | limit: 3 %}
  {% if items.size > 0 %}
    {% include text/three_text_blocks.html
      items=items
      label='OPEN CALLS'
    %}
  {% endif %}
</div>