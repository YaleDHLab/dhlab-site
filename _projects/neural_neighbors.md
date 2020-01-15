---
title: 'Neural Neighbors: Capturing Image Similarity'
image: /assets/images/projects/originals/neural-neighbors.jpg
thumbnail: /assets/images/projects/thumbs/neural-neighbors-thumb.jpg
alt: View of interface showing images similar to boxers of early 1900s
caption: >
  The Meserve-Kunhardt Collection originated as one of the largest private collections of 19th-century photography. With over 73,000 items, the archive is a world-renowned record of America from the Civil War to the Gilded Age. 
<!--project_url: https://yaledhlab.github.io/neural-neighbors/-->
team:
  - name: Yale Digital Humanities Lab Team
categories:
  - Visual Analysis
  - Web Application
tags:
  - Photographs
dhlab_project: true
permalink: '/projects/neural-neighbors/'
---

### Overview

*Neural Neighbors* uses cutting-edge machine vision techniques to detect patterns in the visual figuration of this unique collection, now part of the Beinecke Rare Book & Manuscript Library.

### Convolutional Neural Networks

Artificial neural networks are a form of machine vision that mimics the human brain in their use of simple lines and shapes to learn how to recognize more complex patterns. Advanced GPUs (Graphics Processing Units) that are capable of performing linear algebra hundreds of times faster than conventional computers analyze each 19th-century photograph to identify complex visual combinations. The result is an imaginary space with thousands of dimensions—each dimension a measure of a particular visual characteristic (brass buttons, crossed arms, wavy hair, or a dark background).

### Nearest-Neighbor Similarity

Humans have difficulty conceptualizing more than three dimensions, but modern algorithms can easily compute the closest images in this high-dimensional space—the "nearest neighbors" of each photograph in 2,048 different ways of seeing. This produces a powerful metric for determining visual similarity, as images that share the same visual characteristics will appear near each other.

### Pictorial Tropes

*Neural Neighbors* combines these two data-mining techniques to illuminate the conventions of portraiture and other visual genres in the 19th century. The project reveals how technical limitations, the economics of commercial photography, and received ideals of visual composition produced marked patterns in how individuals and objects were figured. *Neural Neighbors* suggests new ways of understanding this interaction between circulation, social context, and artistic form in the Meserve-Kunhardt Collection. More collections will be added to the site over time.
