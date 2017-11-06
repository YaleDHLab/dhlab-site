---
title: DH Teaching Fellows
order: 0
image: '/assets/images/banners/teaching-fellows.jpg'
caption: >
  A cohort of Digital Humanities Teaching Fellows. Photo by Michael Marsland.
deadline: October 24 2018
application_text: >
  Apply now to become one of our 2018 Digital Humanities Teaching Fellows.
overview: teaching_fellows
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

      <p>Each semester, the Digital Humanities Lab appoints a cohort of Digital Humanities Fellows to assist with courses that have a strong digital humanities component. These positions provide semester-long support for graduate students to engage with DH methods and theories in a classroom setting. DHLab staff will work with Fellows to design DH assignments, arrange access to electronic content, and provide specialized technical training. Visit the <a href='{{ site.baseurl }}/about/teaching_fellows.html'>DH Fellows</a> page to learn about our current recipients and their courses.</p>
    </div>
  </div>

  {% include text/center_section_title.html
    text='HOW TO APPLY'
  %}

  {% capture left_text_one %}
    <p>Fellows are responsible for introducing digital humanities approaches into their class. As a Fellow, you are required to meet with DHLab staff at least once before the semester starts to discuss goals (for the course as well as yourself), look through a syllabus, and identify what methods/theories you will introduce to students. Prior to your teaching the students, DHLab staff will work with you and your cohort to provide training and consider ways to teach the material.</p> 

    <p>Fellows are also expected to attend occasional "cohort" meetings during the semester, which are opportunities to learn about what everyone is doing and to share any successes or challenges you encounter.</p>
  {% endcapture %}

  {% capture left_text_two %}
    <ul>
      <li>DH Fellows retain standard benefits associated with their graduate student status.
      </li>
      <li>DH Fellows are appointed as a Part-Time Acting Instructor (PTAI) within the Graduate School of Arts and Sciences.
      </li>
      <li>Estimated hours of work are 15-20 hours per week.
      </li>
      <li>Compensation will follow the standard Graduate School rate commensurate with a 15-20 hour per week assignment.
      </li>
    </ul>
  
  {% endcapture %}

  {% capture right_text_one %}
    <ul>
      <li>PhD students with a teaching requirement to fulfill are encourage to apply. Seventh-year students may also be considered.
      </li>
      <li>No previous experience in digital humanities is necessary — willingness to learn and teach are.
      </li>
      <li>Undergraduate, graduate, and mixed courses are eligible.
      </li>
      <li>Graduate students should pre-arrange to work with a faculty member on a specific course.
      </li>
    </ul>
  {% endcapture %}

  {% capture right_text_two %}
    <p>To apply, please click on the "Apply Here" button below, which will take you to a brief Google form that will ask you for information about your course and the DH methods you anticipate incorporating.</p>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLScvKOG9RgwKW5nbzHYHHwG9N_yMeoLpaBH-RNbSB1BH0clenA/viewform?usp=sf_link' target='_blank' class='white-button'>Apply Here</a>
  {% endcapture %}

  {% include text/color_blocks.html
    left_title_one='Responsibilities'
    left_text_one=left_text_one

    left_title_two='Position Details'
    left_text_two=left_text_two

    right_title_one='Eligibility'
    right_text_one=right_text_one

    right_title_two='Online Submissions'
    right_text_two=right_text_two
  %}
</div>