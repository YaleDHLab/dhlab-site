---
title: DH Teaching Fellows Application
order: 0
image: '/assets/images/banners/2018-DH-fellows.jpg'
caption: >
  Fall 2018 Digital Humanities Teaching Fellows. Photo by Mara Lavitt.
alt: Three Digital Humanities Teaching Fellows (fall 2018) standing in front of the Special Projects Cube in the Franke Family Digital Humanities Laboratory.
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
      <p>Are you teaching a class next semester? Have you been thinking about incorporating a digital humanities component? Would you like help doing so? If yes, apply for a DH Teaching Fellowship! No prior experience with digital humanities is required.</p>
      <p>Each semester, the Digital Humanities Lab appoints a cohort of Digital Humanities Teaching Fellows to integrate the digital humanities into Yale College classes. These positions provide semester-long support for graduate students to engage with digital humanities methods and theories in a classroom setting. DHLab staff work with Fellows to design digital humanities assignments, identify digital humanities readings or projects of interest to the class, and provide specialized technical training. Visit the <a href='{{ site.baseurl }}/about/teaching_fellows.html' target='_blank'>DH Teaching Fellows page</a> under "About" to see current and past recipients and their courses.</p>
    </div>
   </div>

  {% include text/center_section_title.html
    text='HOW TO APPLY'
  %}

  {% capture left_text_one %}
    <p>Fellows are responsible for introducing the digital humanities into their class. As a Fellow, you are required to meet with Digital Humanities Lab staff at least once before the semester starts to discuss goals (for yourself and the class), look through the syllabus, and identify what digital humanities methods or theories you will introduce to students. At different points in the semester, DHLab staff will meet with you and your cohort to provide training sessions and discuss different approaches to teaching the material.</p> 

    <p>Fellows are also expected to attend occasional cohort meetings during the semester. These are opportunities to learn what everyone is doing in their classes and to share any successes or challenges you encounter.</p>
  {% endcapture %}

  {% capture right_text_one %}
    <p>Which and how digital humanities methods or theories are integrated depends on the scope and goals of the class.</p>

    <p>Some Fellows introduce out-of-the-box tools to help students:
    <ul> 
      <li>map social movements in New Haven,</li> 
      <li>create network graphs of characters in a play,</li>
      <li>crowdsource annotations to develop close reading strategies, or</li> 
      <li>perform text mining to study linguistic trends in novels.</li>
    </ul></p>

    <p>For other classes, Fellows might:   
    <ul>
      <li>showcase projects that tie into the course topic or</li> 
      <li>lead discussions on digital humanities readings</li> 
    </ul></p>
  {% endcapture %}

  {% capture right_text_two %}
    <p>PhD students with a teaching appointment are eligible to apply.</p>

    <p>If you have a teaching appointment for the next semester and are interested in a Digital Humanities Teaching Fellowship, please <a href='mailto:dhlab@yale.edu'>email the DHLab</a> for more information.</p>
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
