---
title: Student Jobs
order: 1
image: '/assets/images/banners/sterling-nave.jpg'
caption: >
  The Nave in Sterling Memorial Library.
application_text: >
  Apply to join us as one of our student programmers or designers.
deadline: Project dependent
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

      <strong>Digital Humanities Lab Project Assistants</strong>
      <p>The Yale Digital Humanities Lab (DHLab) occasionally receives inquiries from Yale-led teams looking to hire students for digital projects. These requests state different levels of humanities and programming expertise. If you would like to be referred for one of these positions when they open up, please <a href='mailto:dhlab@yale.edu'>email the DHLab</a> your resume/CV, along with a brief statement of interest. For any current openings, visit the "Open Calls" section at the bottom of the page, where you can reach out directly to the hiring Principal Investigator (PI).</p>

      <strong>Digital Humanities Consultants</strong>
      <p>The DHLab hires graduate students annually to join our team as consultants. Whether you use machine learning to find aesthetic patterns in 18th-century paintings or interactive data visualizations to track instances of textual reuse in Classical literature we want to hear from you.</p>

      <p>Specific responsibilities vary, but consultants should expect:
        <ul>
          <li>to meet with Yale students, faculty, and staff to provide guidance on research questions in a 1-on-1 or group setting,</li>
          <li>to answer common questions across various disciplines,</li>
          <li>to draw on your expertise on specific digital humanities or data analysis topics, and to act as a point person for related questions,</li>
          <li>to think on the fly, identify project needs, and help develop a recommendation for how patrons should proceed given their subject area, expertise, and timeline.</li>
        </ul>
      </p>
    </div>
  </div>
  {% assign items = site.news | where: 'categories', 'Student Jobs' | sort: 'date' | reverse | limit: 3 %}
  {% if items.size > 0 %}
    {% include text/three_text_blocks.html
      items=items
      label='OPEN CALLS'
    %}
  {% endif %}
</div>
