---
title: Student Jobs
order: 1
image: '/assets/images/banners/sterling-nave.jpg'
caption: >
  The Nave in Sterling Memorial Library.
deadline: Ongoing
application_text: >
  Apply to join us as one of our 2018 student programmers or designers.
overview: student_jobs
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

      <p>If you have programming skills and an interest in humanistic data, apply to work in the Digital Humanities Lab! We are looking to hire Yale undergraduate and graduate students to work on a variety of exciting projects that are underway in the lab.</p>

      <p>Every semester the Digital Humanities Lab funds projects that require different levels of programming expertise. If you would like to be considered for one of these positions when they open up, please email your resume/CV to dhlab@yale.edu, along with a brief statement of interest.</p>

      <p>Yale Digital Scholarship Services—which includes the Digital Humanities Lab and StatLab—hires graduate students each semester to join our team as Digital Scholarship consultants. Whether you use machine learning to find aesthetic patterns in 18th-century paintings, interactive data visualizations to track instances of textual reuse in Classical literature, or big data technologies to identify systemic drivers of gene expression, we want to hear from you.</p>

      <p>Specific responsibilities vary, but consultants should expect:
         <ul>
            <li>to meet with Yale community members from the undergraduate level to the faculty level and to provide guidance on research questions in a 1-on-1 setting
            </li>
            <li>to use your proficiency in digital humanities, statistics, geospatial statistics, or data analysis topics</li>
            <li>to answer common questions across various disciplines</li>
            <li>to use your expertise on specific digital humanities, statistics, geospatial statistics, or data analysis topics, and to act as a point person for related questions</li>
            <li>to think on your feet, quickly assess the needs of patrons, and help develop a recommendation for how they should proceed given their subject area, background, and timeline</li>
            <li>to hone your teaching skills by developing and leading workshops on specific software applied to digital humanities, statistics, geospatial statistics, and data analysis topics</li>
          </ul>
      </p>
    </div>
  </div>
  {% if page.overview == 'student_jobs' %}
    {% assign items = site.news | where: 'categories', 'student jobs' | limit: 3 %}
    {% include text/three_text_blocks.html
      items=items
      label='OPEN CALLS'
    %}
  {% endif %}
  
</div>