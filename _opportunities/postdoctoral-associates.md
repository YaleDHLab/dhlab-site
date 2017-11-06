---
title: Postoctoral Associates
order: 2
image: '/assets/images/banners/sterling-ext.jpg'
caption: >
  Students in front of Sterling Memorial Library.
deadline: October 24, 2018
application_text: >
  Apply now to become one of our 2018 Digital Humanities Postdoctoral Fellows.
overview: postdoctoral_associates
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

      <p>The Digital Humanities Lab (DHLab) at Yale University Library invites applications for three 12-month Postdoctoral Associate positions for the 2017-2018 academic year. We seek energetic and creative applicants who demonstrate innovative thinking and a proactive approach to the questions that digital humanities methods, approaches, tools, and theories raise in their academic disciplines.</p>

      <p>The focus of these positions is on a research project defined by the applicant. Scholars with a background in any humanities discipline are eligible to apply; the committee especially encourages applicants with a research focus in:
        <ul>
          <li>Visual Culture, Art, and/or History of Art</li>
          <li>Holocaust and Genocide Studies, Twentieth-Century European History and Literature, and/or Jewish Studies</li>
        </ul>
      </p>

      <p>Each Postdoctoral Associate will have a dedicated workspace in the DHLab in Sterling Memorial Library; the opportunity to collaborate with technical staff, including a DH Developer and UX Designer; and a budget for computing equipment, professional development, and relocation expenses. The Postdoctoral Associate's primary responsibility will be to his or her own research project. We also expect candidates will be active participants in the intellectual life of the DHLab. The Director of the Digital Humanities Lab will coordinate their integration into the DHLab. Salaries for Postdoctoral Associates will be $47,484.</p>
    </div>
  </div>

  {% include text/center_section_title.html
    text='HOW TO APPLY'
  %}

  {% capture left_text_one %}
    <p>Each Postdoctoral Associate will pursue independent digital humanities research relevant to the candidate’s academic discipline. This includes, but is not limited to:      
      <ul>
        <li>conducting research</li>
        <li>performing analysis</li>
        <li>developing prototypes</li>
        <li>presenting results</li>
        <li>producing electronic and/or print scholarly articles.</li>
      </ul>
    </p>
    <p>As a contributing member of the DHLab, the candidate will also participate in the intellectual life of the DHLab, helping with DH DH Office Hours and consultations.
    </p>
  {% endcapture %}

  {% capture left_text_two %}
    <p>The Digital Humanities Faculty Committee will consider the following during the review process:
      <ul>
        <li>the quality of the research proposal and the intellectual significance for the applicant's field of scholarship</li>
        <li>demonstrated experience with and interest in digital humanities projects, methods, approaches, theories, and/or methodologies;</li>
        <li>excellent communication, presentation, and interpersonal skills</li>
        <li>ability to work collaboratively and collegially with programmers, designers, outreach specialists, student workers, faculty, and subject librarians</li>
      </ul>
    </p>
  {% endcapture %}

  {% capture right_text_one %}
    <p>Applications should include:
      <ul>
        <li>a research plan for the project to be undertaken during the fellowship period, not to exceed 3-5 pages</li>
        <li>a curriculum vitae</li>
        <li>two letters of recommendation.</li>
      </ul>
    </p>
    <p>Applicants do not need a PhD to submit an application; however,the position does require a Ph.D. or equivalent degree by the start date of the appointment.</p>
  {% endcapture %}

  {% capture right_text_two %}
    <p>Applicants should click on the "Apply Here" button below to go to a Google Form where they can submit their information, along with a research plan that describes the goals and scope of the project that would be undertaken during the fellowship period, as well as their curriculum vitae.</p>
    <a href='{{ site.postdoctoral_application }}' target='_blank' class='white-button'>Apply Here</a>
  {% endcapture %}

  {% include text/color_blocks.html
    left_title_one='Responsibilities'
    left_text_one=left_text_one

    left_title_two='Selection Criteria'
    left_text_two=left_text_two

    right_title_one='Requirements for Application'
    right_text_one=right_text_one

    right_title_two='Online Submissions'
    right_text_two=right_text_two 
  %}
</div>