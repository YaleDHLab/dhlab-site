---
layout: bookshelf
permalink: bookshelf
title: bookshelf
has_bookshelf: true
---

{% include curated-shelf.html books="1783555130, 3030028631, 1250074312" description="A small shelf" title="New this month!" %}

## A second shelf

This time we'll leave the text in the page, rather than set it via the plugin.

{% include curated-shelf.html 
books="0262572478, 0961392177, 1589481186, 0199256055, 1137440422, 1844670260, 0970601999, 1405168064, 0691115311, 0961392118, 1472441303, 0970601999, 1405168064, 0691115311, 0961392118, 1472441303" %}

## All books  

This is all of our books.

{% include allbooks.html %}
