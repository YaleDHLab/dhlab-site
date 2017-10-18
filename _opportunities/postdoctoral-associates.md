---
title: Postoctoral Associates
order: 2
image: '/assets/images/banners/sterling-ext.jpg'
caption: "Lorem ipsum dolor sit amet, sollicitudin non quas libero dictum nulla vel. Quam porttitor lacus a wisi. Duis congue, ut quam elit at a. Orci fermentum mattis accusantium. Libero fermentum condimentum sed, vel"
deadline: October 24, 2018
application_text: Apply now to become one of our 2018 Digital Humanities Postdoctoral Fellows.
application_url: http://google.com
overview: postdoctoral_associates
---

<div class='center-column post'>
  <div class='two-column-container one-third-width hide-left'>
    <div class='left-column'>
      {% include text/detail_page_links.html
        items=site.opportunities
        page=page
      %}

      {% include text/apply_link.html page=page %}
    </div>
    <div class='right-column'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti nullam. Habitant morbi tristique senectus et netus. In eu mi bibendum neque egestas congue quisque. Nibh sit amet commodo nulla. Arcu vitae elementum curabitur vitae nunc sed. Sed turpis tincidunt id aliquet risus. Tristique senectus et netus et malesuada. Varius duis at consectetur lorem donec massa sapien faucibus et. Diam maecenas sed enim ut sem viverra aliquet eget. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Sapien et ligula ullamcorper malesuada. Maecenas volutpat blandit aliquam etiam. Purus semper eget duis at tellus at urna condimentum mattis. Fringilla ut morbi tincidunt augue interdum velit. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Nibh tortor id aliquet lectus proin nibh nisl.</p>

      <p>Ac ut consequat semper viverra nam libero. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Commodo quis imperdiet massa tincidunt. Nulla facilisi etiam dignissim diam quis enim. Nunc sed id semper risus in hendrerit. Tellus molestie nunc non blandit massa enim nec. Vulputate enim nulla aliquet porttitor. Diam sollicitudin tempor id eu. Posuere morbi leo urna molestie at elementum eu. Pretium aenean pharetra magna ac placerat vestibulum. Amet facilisis magna etiam tempor orci eu lobortis elementum. Faucibus turpis in eu mi. Sodales ut etiam sit amet nisl purus in mollis nunc. Sit amet massa vitae tortor condimentum lacinia.</p>
    </div>
  </div>

  {% include text/center_section_title.html
    text='HOW TO APPLY'
  %}

  {% capture left_text_one %}
    <p>Lorem ipsum dolor sit amet, turpis odio molestie, lobortis faucibus pharetra et orci auctor, scelerisque sodales turpis ante congue velit eros, orci in, est pulvinar condimentum mi egestas. Arcu curabitur est rutrum inceptos, voluptatem elit lorem, lacus tempor mattis elit penatibus urna, aut cursus quis in et mus.</p>
  {% endcapture %}

  {% capture left_text_two %}
    <p>Lorem ipsum dolor sit amet, turpis odio molestie, lobortis faucibus pharetra et orci auctor, scelerisque sodales turpis ante congue velit eros, orci in, est pulvinar condimentum mi egestas. Arcu curabitur est rutrum inceptos, voluptatem elit lorem, lacus tempor mattis elit penatibus urna, aut cursus quis in et mus.</p>
    <p>Eget sollicitudin risus arcu atque ut, ligula suspendisse nunc pulvinar mi. Sit sit egestas metus proin at. Augue hymenaeos magna leo mauris mollis mi. Augue id justo sit ligula urna ullamcorper, magna facilisi neque, vestibulum et nonummy, nulla elit lorem blandit, tincidunt ut cras suscipit lacinia mauris. Est torquent diam suscipit et purus.</p>
    <p>Eget sollicitudin risus arcu atque ut, ligula suspendisse nunc pulvinar mi. Sit sit egestas metus proin at. Augue hymenaeos magna leo mauris mollis mi. Augue id justo sit ligula urna ullamcorper, magna facilisi neque, vestibulum et nonummy, nulla elit lorem blandit, tincidunt ut cras suscipit lacinia mauris. Est torquent diam suscipit et purus.</p>
  {% endcapture %}

  {% capture right_text_one %}
    <p>Lorem ipsum dolor sit amet, turpis odio molestie, lobortis faucibus pharetra et orci auctor, scelerisque sodales turpis ante congue velit eros, orci in, est pulvinar condimentum mi egestas. Arcu curabitur est rutrum inceptos, voluptatem elit lorem, lacus tempor mattis elit penatibus urna, aut cursus quis in et mus.</p>
    <p>Lorem ipsum dolor sit amet, turpis odio molestie, lobortis faucibus pharetra et orci auctor, scelerisque sodales turpis ante congue velit eros, orci in, est pulvinar condimentum mi egestas. Arcu curabitur est rutrum inceptos, voluptatem elit lorem, lacus tempor mattis elit penatibus urna, aut cursus quis in et mus.</p>
  {% endcapture %}

  {% capture right_text_two %}
    <p>Lorem ipsum dolor sit amet, turpis odio molestie, lobortis faucibus pharetra et orci auctor, scelerisque sodales turpis ante congue velit eros, orci in, est pulvinar condimentum mi egestas. Arcu curabitur est rutrum inceptos, voluptatem elit lorem, lacus tempor mattis elit penatibus urna, aut cursus quis in et mus.</p>
    <p>Eget sollicitudin risus arcu atque ut, ligula suspendisse nunc pulvinar mi. Sit sit egestas metus proin at. Augue hymenaeos magna leo mauris mollis mi. Augue id justo sit ligula urna ullamcorper, magna facilisi neque, vestibulum et nonummy, nulla elit lorem blandit, tincidunt ut cras suscipit lacinia mauris. Est torquent diam suscipit et purus.</p>
    <a href='{{ site.baseurl }}/resources/workshops.html' class='white-button'>Learn More</a>
  {% endcapture %}

  {% include text/color_blocks.html
    left_title_one='Responsibilities'
    left_text_one=left_text_one

    left_title_two='Selection Criteria'
    left_text_two=left_text_two

    right_title_one='Requirements'
    right_text_one=right_text_one

    right_title_two='Online Submissions'
    right_text_two=right_text_two
  %}

    {% capture left_text %}
    {% include text/personnel_list.html items=site.data.postdoctoral_associates %}
    <div>Eleifend tellus pulvinar nunc sed metus, praesent nunc tortor, eget ante risus at eget et, pulvinar congue sociis felis imperdiet mauris. Mauris integer ligula, quis lacinia urna facilisis aliquam taciti. Quis pulvinar nunc nec incididunt cursus.</div>
  {% endcapture %}

  {% capture right_text %}
    <div>Eleifend tellus pulvinar nunc sed metus, praesent nunc tortor, eget ante risus at eget et, pulvinar congue sociis felis imperdiet mauris. Mauris integer ligula, quis lacinia urna facilisis aliquam taciti. Quis pulvinar nunc nec incididunt cursus, turpis et nullam donec amet, vivamus convallis lectus pellentesque tristique vel, venenatis mattis luctus, rutrum at quam eget. Urna vel. Imperdiet in integer felis eget ac quis. Sed donec quis sollicitudin amet, adipiscing ac justo proin orci. Commodi venenatis, lectus ligula integer mus velit nulla, commodo tempor non duis, sem quam lorem etiam vitae suscipit.</div>
    <br/>
    <div>Integer tincidunt porta, et posuere nulla maecenas sapien lectus. Nibh justo suscipit ipsam laboriosam, mauris nunc. Praesent nisl donec eius donec quam adipiscing, metus libero quis velit, sollicitudin nunc accumsan, felis dictum et dui nam senectus tellus. Habitasse ac viverra, velit ut, malesuada ut sed ac mauris eu. Est duis nec a leo natoque, curabitur pellentesque tellus vestibulum amet, pede volutpat tortor quam aliquam, dignissim eros. Magna adipiscing laoreet arcu cras nullam, accumsan luctus.</div>
  {% endcapture %}

  {% assign left_button_url = '/projects.html' | prepend: site.baseurl %}
  {% assign right_button_url = '/resources.html' | prepend: site.baseurl %}

  {% include text/half-width/two_column_text.html
    left_title = 'Former Postdoctoral Associates'
    left_text = left_text
    left_button_url = left_button_url
    left_button_label = 'View Projects'

    right_title = 'Resources'
    right_text = right_text
    right_button_url = right_button_url
    right_button_label = 'What We Offer'
  %}
</div>