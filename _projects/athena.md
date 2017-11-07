---
title: 'ATHENA'
thumbnail: '/assets/images/projects/athena.jpg'
layout: archive
project_url: http://ccp.yale.edu/

team:
  - name: Ruggero Pintus
    position: Computer Science
  - name: Ying Yang 
    position: Computer Science
  - name: Holly Rushmeier
    position: Computer Science

categories:
  - Visual Analysis

tags:
  - Computer Science
  - Medieval manuscripts
  - Beinecke Rare Boom and Manuscript Library
---

<h2 class='subheading'>Overview</h2>

<p>ATHENA (Automatic Text Height ExtractioN for the Analysis of old handwritten manuscripts) has developed a layout analysis method to perform automatic text height estimation, even in the case of very noisy and damaged handwritten manuscripts. The effectiveness of the method has been demonstrated on large corpus of medieval manuscripts, with different writing styles, and affected by other uncontrollable factors, such as ink bleed-through, background noise, and overtyping text lines.</p>
<br/>

<h2 class='subheading'>Goals &amp; Methods</h2>

<p>ATHENA presents a parameter-free, automatic method to perform text height estimation. Given the image of a manuscript
page, a multi-scale representation is first produced. Then, for each sub-image at each level, a robust, frequency-based
descriptor is computed. Finally, a voting procedure finds the predominant spatial frequency in the document page, whose
period is the value of the text height. It proves to be an efficient and reliable technique in the case of very noisy and
damaged old handwritten manuscripts. The major contributions of the proposed approach include the following:</p>

<p><b>Frequency-based descriptor.</b> A new local image descriptor based on a frequency analysis of the y-axis projected profile
of the normalized image autocorrelation function.</p>

<p><b>Multi-scale framework.</b> A multi-level approach with a voting procedure to exploit spatial consistency between frequency-based image descriptors at different scale levels.</p>

<p><b>Evaluation.</b> To assess this method, an extensive evaluation of the proposed algorithm is presented and then applied to a huge
heterogeneous corpus content.</p>