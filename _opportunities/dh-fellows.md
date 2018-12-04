---
title: DH Teaching Fellows Application
order: 0
image: '/assets/images/banners/2018-DH-fellows.jpg'
caption: >
  Fall 2018 Digital Humanities Teaching Fellows. Photo by Mara Lavitt.
alt: Three Digital Humanities Teaching Fellows (fall 2018) standing in front of special projects cube in the Franke Family Digital Humanities Laboratory.
<!--application_text: >
  Apply now to become one of our Digital Humanities Teaching Fellows.-->
apply_button: hidden
<!--application_url: >
  https://docs.google.com/forms/d/e/1FAIpQLScvKOG9RgwKW5nbzHYHHwG9N_yMeoLpaBH-RNbSB1BH0clenA/viewform?usp=sf_link-->
deadline: Email the DHLab for more information.
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

      <p>Each semester, the Digital Humanities Lab appoints a cohort of Digital Humanities Teaching Fellows to integrate the digital humanities into Yale College classes. These positions provide semester-long support for graduate students to engage with digital humanities methods and theories in a classroom setting. DHLab staff work with Fellows to design digital humanities assignments, arrange access to electronic content, identify digital humanities readings or projects of interest to the class, and provide specialized technical training. Visit the <a href='{{ site.baseurl }}/about/teaching_fellows.html' target='_blank'>DH Teaching Fellows page</a> under "About" to see current and past recipients and their courses.</p>
    </div>
   </div>

  {% include text/center_section_title.html
    text='HOW TO APPLY'
  %}

  {% capture left_text_one %}
    <p>Fellows are responsible for introducing the digital humanities into their class. As a Fellow, you are required to meet with Digital Humanities Lab staff at least once before the semester starts to discuss goals (for yourself and the class), look through a syllabus, and identify what methods or theories you will introduce to students. Prior to your teaching the students, DHLab staff will meet with you and your cohort to provide training sessions and discuss different approaches to teaching the material.</p> 

    <p>Fellows are also expected to attend occasional cohort meetings during the semester. These are opportunities to learn what everyone is doing in their classes and to share any successes or challenges you encounter.</p>
  {% endcapture %}

  {% capture left_text_two %}
    <p>Which and how digital humanities methods or theories are integrated depends on the scope and goals of the class. Some Fellows introduce out-of-the-box tools to help students map social movements in New Haven, create network graphs of characters in a play, or crowdsource annotations to develop close reading strategies. For other classes, Fellows showcase projects or lead discussions on digital humanities readings that tie into the course topic.</p>
  {% endcapture %}
  
  {% capture right_text_one %}
    <ul>
      <li>PhD students with a teaching requirement to fulfill are eligible to apply.</li>
    </ul>
  {% endcapture %}

  {% capture right_text_two %}
    <p>If you have a teaching appointment for the next semester and are interested in a Digital Humanities Teaching Fellowship, please email the DHLab for more information.</p>
  {% endcapture %}

  {% include text/color_blocks.html
    left_title_one='Responsibilities'
    left_text_one=left_text_one
    
    left_title_two='DH in the Classroom'
    left_text_two=left_text_two
    
    right_title_one='Eligibility'
    right_text_one=right_text_one

    right_title_two='Application'
    right_text_two=right_text_two
  %}
</div>
