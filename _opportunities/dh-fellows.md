---
title: DH Teaching Fellows Application
order: 0
image: '/assets/images/banners/2018-DH-fellows.jpg'
caption: >
  Fall 2018 Digital Humanities Teaching Fellows. Photo by Mara Lavitt.
alt: Three Digital Humanities Teaching Fellows (fall 2018) standing in front of the Special Projects Cube in the Franke Family Digital Humanities Laboratory.
application_text: >
  Apply now to become one of our Fall 2020 Fellows.
apply_button:
application_url: >
  https://docs.google.com/forms/d/e/1FAIpQLSdXL7XBml2aGR2aprFD4KB-9Mq837aRuL0xSLpij-_YW6stlg/viewform?usp=sf_link
deadline: Applications are considered on a rolling basis.
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
      <p>Learn digital humanities methods as part of a cohort of Yale Digital Humanities (DH) Teaching Fellows! No prior experience with digital humanities is required. The Fellowship is an opportunity to learn digital humanities methods—such as text mining, network analysis, and geospatial analysis—and apply them to your teaching.</p> 
      <p>Along with providing specialized technical training for DH Fellows, Digital Humanities Lab staff also work with Fellows to design digital humanities assignments and identify readings or projects of interest. Visit our <a href='{{ site.baseurl }}/about/teaching_fellows.html' target='_blank'>DH Teaching Fellows page</a> to see current and past recipients and their courses.</p>
      <p>For the Fall 2020 semester, DH Fellow meetings and workshops will occur over Zoom.</p>
    </div>
   </div>

  {% include text/center_section_title.html
    text='HOW TO APPLY'
  %}

  {% capture left_text_one %}
    <p>As a DH Teaching Fellow, you are required to attend three meetings with your cohort and one training session. Additional optional training sessions will be provided as needed.
    <ul>
      <li>The first cohort meeting occurs at the beginning of the semester and is a chance to discuss goals, look through your syllabus, and identify what digital humanities methods or theories you might introduce to students.</li>
      <li>The second meeting occurs near the middle of the semester to check-in, share success stories and challenges, and set up any additional optional training sessions.</li>
      <li>The third meeting occurs near the end of the semester to reflect on the term and discuss possible next steps, such as additional training opportunities and describing your digital engagement in your teaching portfolio.</li>
      <li>Training sessions provide guided instruction on one or more digital humanities methods and are scheduled around Fellows' availability. Each Fellow will have a required training session that's connected to their class, but Fellows who are interested in learning additional tools, techniques, or theories or who would like to schedule follow-up discussions can request additional sessions. Training sessions are open to all Fellows to attend—so even if you're not using networks in your class, but your cohort member is, you can also learn how to create networks.</li>
    </ul></p>
  {% endcapture %}

  {% capture right_text_one %}
    <p>Which and how digital humanities methods or theories are integrated depends on the scope and goals of the class.</p>

    <p>Some Fellows introduce out-of-the-box tools to help students:
    <ul> 
      <li>map social movements in New Haven,</li> 
      <li>create network graphs of characters in a play,</li>
      <li>crowdsource annotations to develop close reading strategies,</li> 
      <li>perform text mining to study linguistic trends in novels.</li>
    </ul></p>
    <p>Fellows do not have to incorporate tools in their classes. Sometimes Fellows:   
    <ul>
      <li>showcase digital projects that tie into the course</li> 
      <li>lead discussions on digital humanities readings.</li> 
    </ul></p>
    <p>During the award period, Fellows may reserve a desk for their use in the Franke Family Digital Humanities Laboratory for their office hours and work.</p>
  {% endcapture %}

  {% capture right_text_two %}
    <p>Yale graduate students in the humanities or with a teaching appointment in the humanities are eligible to apply.</p>

    <p>For more information, please <a href='mailto:dhlab@yale.edu'>email the DHLab</a> or <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXL7XBml2aGR2aprFD4KB-9Mq837aRuL0xSLpij-_YW6stlg/viewform?usp=sf_link' target='_blank'>submit an application.</a> Applications are currently being accepted for Fall 2020 appointments and will be reviewed on a rolling basis.</p>
  {% endcapture %}

  {% include text/color_blocks.html
    left_title_one='Responsibilities'
    left_text_one=left_text_one

    right_title_one='DH in the Classroom'
    right_text_one=right_text_one

    right_title_two='Eligibility & Application'
    right_text_two=right_text_two
  %}
</div>
