---
title: Inside the Decisive Network
image: /assets/images/banners/decisive-network.jpg
thumbnail: /assets/images/projects/thumbs/magnum-thumb.jpg
alt: Staff and photographers who attended Magnum's Annual Meeting in 1957
caption: >
  Photograph from Magnum's Annual Meeting in 1957. 
team:
  - name: Nadya Bair
    position: Yale Digital Humanities Lab; <br/> American Studies
categories:
  - Network Analysis
  - Spatial Analysis
  - Web Application
tags:  
  - Archives
  - Photographs
dhlab_project: true
project_url: http://thedecisivenetwork.com/
permalink: '/projects/decisive-network/'
---

### Project Overview

Magnum Photos was founded in 1947 by five photographers, a group that included Robert Capa and Henri Cartier-Bresson. Still in existence, Magnum has become a highly respected and recognizable brand. Exhibitions and books about the agency are produced each year, focusing on Magnum’s legendary founders and their iconic, black-and-white photographs. The business side is rarely part of Magnum’s story because it complicates Magnum’s mythologies, especially that of the photographer as a “concerned” witness to history, and the photographer as an artist, on the hunt for “decisive moments.” 

*Inside the Decisive Network* was motivated by larger questions about the workings of photography and the press. If Magnum was so important, what exactly *was* its contribution to the industry and profession of photojournalism? How did it operate day-to-day? And how did it fit into the broader media landscape after World War II?  

Based in years of research in archives around the world, this digital project—and <a href='https://www.ucpress.edu/book/9780520300354/the-decisive-network' target='_blank'>the book</a> that it accompanies—is the first attempt to systematically examine Magnum’s early operations. It argues that Magnum’s photographers were core members of a larger, “decisive network” of professionals who helped photographers attain success. This network included editors, secretaries, and sales agents – many of them women, and many of them missing from histories of photography. 

Each section of the site looks at different collaborations and transactions that underpinned Magnum’s operations and the industry of photojournalism after World War II.

In “Staff,” visitors can see who worked in Magnum’s New York and Paris offices and what they contributed to the organization.

<img src='{{site.baseurl}}/assets/images/projects/project-extras/magnum-network.jpg'
     alt="Network of John Morris's contacts at Magnum" 
     style='float: left; margin-right: 10px; padding-bottom: 10px' />

In “Agents,” visitors can explore how Magnum’s pictures were distributed and sold in postwar Europe. 

<img src='{{site.baseurl}}/assets/images/projects/project-extras/magnum-agents.jpg'
     alt="Map of Magnum's distribution coverage in Europe" 
     style='float: left; margin-right: 10px; padding-bottom: 10px' />

In “Stories,” visitors can examine Magnum’s photo essays as they appeared in magazines around the world. 

<img src='{{site.baseurl}}/assets/images/projects/project-extras/magnum-stories.jpg'
     alt="Map of Magnum's distribution coverage in Europe" 
     style='float: left; margin-right: 10px; padding-bottom: 10px' />

### Visualizing the Story: Motivation and Methods 

History is often written according to a chronological and linear narrative. Yet the industry of photojournalism developed on multiple, concurrent tracks and involved the simultaneous labor of many people. 

This site is an experiment in visually telling the story of Magnum’s activities in the decade after World War II. It integrates a number of methods that are integral to digital scholarship, including mapping and the study of networks, while taking a customized approach to how this information is represented. 

Early attempts to study Magnum using ready-made software such as Gephi and Carto yielded unsatisfactory results. Representing the 1940s and 1950s with out-of-the-box visualization tools made little sense. The design of this project is inspired by the mid-century magazines and publicity brochures found on the desks of Magnum employees. It features custom network graphs and custom montages of Magnum photo essays designed by Yale’s UX Designer Monica Ong Reed using Adobe XD. It also uses archival photographs, which show that networks of professionals were often hiding in plain sight. For instance, Bert Stern’s 1957 portrait of Magnum, which appeared on the cover of *Exposure* magazine in 1982 and is the introductory image on the staff page here, shows Magnum photographers and staff in almost a 1:1 ratio. 

Other components of the site, including the timeline of staff career trajectories and the country essays that describe the role of Magnum’s agents, required more data than was initially available from a close reading of the archive. Making the archive searchable became crucial so that more data could be extracted quickly. With the help of a Google product called Tesseract, Yale’s Developer Douglas Duhaime converted thousands of reproductions of archival documents (stored as jpeg and tiff files) into txt files. He then built a simple database, which implements a client-side binary tree, to allow users to search documents quickly. Mining the archive for various staff members or magazine titles became instantaneous. 

For more information on the project, please contact the project author, [Nadya Bair](mailto:nadyabair@gmail.com). 
