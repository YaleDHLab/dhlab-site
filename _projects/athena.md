---
title: ATHENA
thumbnail: /assets/images/projects/archive-thumbs/athena-thumb.jpg
alt: Medieval manuscript with comparison of text heights
layout: archive
project_url: http://ydc2.yale.edu/athena-automatic-text-height-extraction-analysis-old-handwritten-manuscripts
categories:
  - Visual Analysis
tags:
  - Manuscripts
  - Medieval
  - Languages
---

### Overview

*Automatic Text Height ExtractioN for the Analysis of old handwritten manuscripts* (ATHENA) has developed a layout analysis method to perform automatic text height estimation, even in the case of very noisy and damaged handwritten manuscripts. The effectiveness of the method has been tested on a large corpus of medieval manuscripts that has different writing styles and has been affected by other factors, such as ink bleed-through, background noise, and overtyping text lines.

### Goals &amp; Methods

ATHENA presents a parameter-free, automatic method to perform text height estimation. Given the image of a manuscript page, a multi-scale representation is first produced. Then, for each sub-image at each level, a robust, frequency-based descriptor is computed. Finally, a voting procedure finds the predominant spatial frequency in the document page, whose period is the value of the text height. This proves to be an efficient and reliable technique in the case of very noisy and damaged old handwritten manuscripts. The major contributions of the proposed approach include the following:

**Frequency-based descriptor.** A new local image descriptor based on a frequency analysis of the y-axis projected profile of the normalized image autocorrelation function

**Multi-scale framework.** A multi-level approach with a voting procedure to exploit spatial consistency between frequency-based image descriptors at different scale levels

**Evaluation.** An extensive evaluation of the proposed algorithm is presented and then applied to a huge heterogeneous corpus.