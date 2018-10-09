---
process: true
---

import _ from 'lodash';
import { renderArchive, renderNews, renderProjects } from './render';

// polyfill to ensure doc.querySelectorAll returns array
NodeList.prototype.forEach = Array.prototype.forEach;

export const filter = (config) => {

  const bindEventListeners = () => {
    ['#' + config.field1, '#' + config.field2].forEach((selector) => {
      const elem = document.querySelector(selector);
      elem.addEventListener('change', refilter);
    })
  }

  const refilter = () => {
    let selected = {};
    let itemsToRender = [];
    selected[config.field1] = document.querySelector('#' + config.field1).value;
    selected[config.field2] = document.querySelector('#' + config.field2).value;
    config.items.map((item) => {
      let fields = [];
      [config.field1, config.field2].map((f) => {
        if (f !== 'sort-by') fields.push(f)
      });
      let render = true;
      fields.map((field) => {
        const fieldVals = item[field];
        if (selected[field].toLowerCase() !== 'all' &&
            !_.includes(fieldVals, selected[field])) {
          render = false;
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
    const renderTarget = document.querySelector(config.target);
    if (!renderTarget) {
      console.warn('render target is not available:', config.target);
      return;
    }
    renderTarget.innerHTML = '';
    switch(config.type) {
      case 'archive':
        renderArchive(config.target, itemsToRender)
        break;

      case 'project':
        renderProjects(config.target, itemsToRender)
        break;

      default:
        renderNews(config.target, itemsToRender)
        break;
    }
  }

  /**
  * Helper to find all available categories and tags
  **/

  const findExtantValues = () => {
    config.items.map((item) => {
      [config.field1, config.field2].map((field) => {
        const fieldVals = item[field];
        if (fieldVals) fieldVals.map((val) => values[field].push(val))
      })
    })
  }

  /**
  * Helper to render all new options to each select
  **/

  const addOptions = (selector, options) => {
    const parent = document.querySelector(selector);
    const elems = document.querySelector(selector).querySelectorAll('option');
    let extant = [];
    elems.forEach((e) => extant.push(e.textContent.trim()))

    _.uniq(options).sort().map(option => {
      if (extant.indexOf(option) === -1) {
        let child = document.createElement('option');
        child.setAttribute('value', option);
        child.text = option;
        parent.appendChild(child);
      }
    })
  }

  /**
  * Helper that sorts items if necessary
  **/

  const sortItems = (arr) => {
    const sortBy = document.querySelector('#sort-by');
    return sortBy ?
      _.chain(arr).sortBy(sortBy.value).reverse().value()
      : arr;
  }

  /**
  * Set the state of a select using query params on page load
  **/

  const filterByQueryParams = () => {
    if (!window.location.search) return;
    const query = window.location.search.substring(1);
    query.split('&').forEach((q) => {
      const split = q.split('=');
      const key = decodeURIComponent(split[0]);
      const val = decodeURIComponent(split[1]);
      if (key === config.field1) {
        document.querySelector('#' + config.field1).value = val;
      } else if (key === config.field2) {
        document.querySelector('#' + config.field2).value = val;
      }
    })
  }

  /**
  * Globals
  *
  * All configuration is defined in a single incoming object `config`
  *   config.target - selector for the element that will render all children
  *   config.field1 - string for the first selector id used for filtering
  *   config.field2 - string for the second selector id used for filtering
  *   config.type - string that determines the kind of objects rendered
  *   config.items - list of objects to filter and render
  *   config.setFilters - (optional) should we initialize the selects?
  **/

  // App state
  let values = {};
  values[config.field1] = [];
  values[config.field2] = [];

  // Initialize listeners and renders
  findExtantValues();
  addOptions('#' + config.field1, values[config.field1]);
  addOptions('#' + config.field2, values[config.field2]);
  bindEventListeners();
  filterByQueryParams();
  refilter();
};