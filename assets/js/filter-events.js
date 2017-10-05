import _ from 'lodash';

(() => {

  /**
  * Globals
  **/

  const events = document.querySelectorAll('.past-event');

  let values = {
    'categories': [],
    'tags': []
  };

  /**
  * Bind event listeners to selects
  **/

  function bindEventListeners() {
    ['#categories', '#tags'].forEach((selector) => {
      const elem = document.querySelector(selector);
      elem.addEventListener('change', handleChange);
    })
  }

  function handleChange() {
    const selected = {
      'categories': document.querySelector('#categories').value,
      'tags': document.querySelector('#tags').value
    }

    for (let i=0; i<events.length; i++) {
      let render = true;
      ['categories', 'tags'].forEach((field) => {
        const fieldVals = JSON.parse(events[i].dataset[field]);
        if (selected[field] !== 'ALL') {
          if (!_.includes(fieldVals, selected[field])) {
            render = false;
          }
        }
      })
      events[i].style.display = render ? 'inline-block' : 'none';
    }
  }

  /**
  * Helper to find all available categories and tags
  **/

  function findExtantValues() {
    for (let i=0; i<events.length; i++) {
      ['categories', 'tags'].forEach((field) => {
        const fieldVals = JSON.parse(events[i].dataset[field]);
        fieldVals.forEach((val) => {
          values[field].push(val)
        })
      })
    }
  }

  /**
  * Helper to render each select's options
  **/

  function addOptions(selector, options) {
    const parent = document.querySelector(selector);
    _.uniq(options).map((option) => {
      let child = document.createElement('option');
      child.setAttribute('value', option);
      child.text = option;
      parent.appendChild(child);
    })
  }

  /**
  * Main
  **/

  findExtantValues();
  bindEventListeners();
  addOptions('#categories', values.categories);
  addOptions('#tags', values.tags);

})()