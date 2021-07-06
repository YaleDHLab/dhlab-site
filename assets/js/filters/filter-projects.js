import { filter } from './filter.js';

(() => {
  if (!window.location.href.includes('projects')) return;
  if (!document.querySelector('#dhlab-projects')) return;

  new filter({
    target: '#grid-target',
    field1: 'categories',
    field2: 'tags',
    type: 'archive',
    items: window.items,
  });

  new filter({
    target: '#dhlab-projects',
    field1: 'categories',
    field2: 'tags',
    type: 'project',
    items: window.projects,
  });

})()