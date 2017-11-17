import { filter } from './filter.js';

(() => {
  if (!window.location.href.includes('projects')) return;
  new filter();
})()