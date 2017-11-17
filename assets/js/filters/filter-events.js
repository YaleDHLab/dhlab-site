import { filter } from './filter.js';

(() => {
  if (!window.location.href.includes('events')) return;
  new filter();
})()