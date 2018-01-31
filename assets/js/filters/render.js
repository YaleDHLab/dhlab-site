---
process: true
---

const projectTemplate = require('../../templates/project-template.html');
const archiveTemplate = require('../../templates/archive-template.html');
const newsTemplate = require('../../templates/news-template.html');

export const renderProjects = (target, items) => {
  document.querySelector(target).innerHTML = projectTemplate({
    items: items,
    baseurl: '{{ site.baseurl }}'
  });
}

export const renderArchive = (target, items) => {
  document.querySelector(target).innerHTML = archiveTemplate({
    items: items,
    baseurl: '{{ site.baseurl }}'
  });
}

export const renderNews = (target, items) => {
  document.querySelector(target).innerHTML = newsTemplate({
    items: items,
    baseurl: '{{ site.baseurl }}'
  });
}