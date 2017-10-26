---
process: true
---

import _ from 'lodash';
import { renderArchive, renderNews } from './render';

// polyfill to ensure doc.querySelectorAll returns array
NodeList.prototype.forEach = Array.prototype.forEach;

export const filter = (config) => {

  const bindEventListeners = () => {
    [id1, id2].forEach((selector) => {
      const elem = document.querySelector(selector);
      elem.addEventListener('change', handleChange);
    })
  }

  const handleChange = () => {
    let selected = {};
    let itemsToRender = [];
    selected[field1] = document.querySelector(id1).value;
    selected[field2] = document.querySelector(id2).value;

    items.map((item) => {
      let fields = [];
      [field1, field2].map((f) => {
        if (f !== 'sort-by') fields.push(f)
      });

      let render = true;
      fields.map((field) => {
        const fieldVals = item[field];
        if (selected[field].toLowerCase() !== 'all') {
          if (!_.includes(fieldVals, selected[field])) {
            render = false;
          }
        }
      })
      if (render) itemsToRender.push(item);
    })

    renderItems(sortItems(itemsToRender));
  }

  /**
  * Helper that performs all renders
  **/

  const renderItems = (itemsToRender) => {
    document.querySelector(target).innerHTML = '';
    type === 'archive' ?
        renderArchive(target, itemsToRender)
      : renderNews(target, itemsToRender);
  }

  /**
  * Helper to find all available categories and tags
  **/

  const findExtantValues = () => {
    items.map((item) => {
      [field1, field2].map((field) => {
        const fieldVals = item[field];
        if (fieldVals) {
          fieldVals.map((val) => {
            values[field].push(val);
          })
        }
      })
    })
  }

  /**
  * Helper to render each select's options
  **/

  const addOptions = (selector, options) => {
    const parent = document.querySelector(selector);
    _.uniq(options).map((option) => {
      let child = document.createElement('option');
      child.setAttribute('value', option);
      child.text = option;
      parent.appendChild(child);
    })
  }
  
  /**
  * Helper that sorts items if necessary
  **/

  const sortItems = (items) => {
    const sortBy = document.querySelector('#sort-by');
    return sortBy ? _.chain(items).sortBy(sortBy.value).reverse().value() : items;
  }

  /**
  * Globals
  **/

  // All configuration is defined in a single incoming object
  var config = config || {};
  const target = config.target || '#grid-target';
  const elemSelector = config.elemSelector || '.archive-item';
  const field1 = config.field1 || 'categories';
  const field2 = config.field2 || 'tags';
  const type = config.type || 'archive';

  // Selector ids are identical to the item field they search
  const id1 = '#' + field1;
  const id2 = '#' + field2;

  // Ensure the required params are present
  if (!id1 ||
      !id2 ||
      !document.querySelector(id1) ||
      !document.querySelector(id2)) return;

  // App State
  let values = {};
  values[field1] = [];
  values[field2] = [];

  // Initialize listeners and renders
  findExtantValues();
  addOptions(id1, values[field1]);
  addOptions(id2, values[field2]);
  bindEventListeners();
  renderItems(sortItems(items));
};