import { filter } from './filter.js';

(() => {
  if (!window.location.href.includes('events')) return;
  if (!document.querySelector('#archive-grid')) return;

  new filter({
    target: '#grid-target',
    field1: 'categories',
    field2: 'tags',
    type: 'archive',
    items: window.items,
  });
})()