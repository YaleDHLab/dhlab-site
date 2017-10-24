import _ from 'lodash';
import { filter } from './filter.js';

(() => {
  if (!window.location.href.includes('news')) return; 
  new filter({
    target: '#grid-target',
    elemSelector: '.archive-item',
    field1: 'tags',
    field2: 'sort-by',
    type: 'news'
  });
})()