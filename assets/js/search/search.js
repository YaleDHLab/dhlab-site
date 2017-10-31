import _ from 'lodash';
import lunr from 'lunr';
import resultTemplate from '../../templates/search-result-template.html';

(() => {

  /**
  * Globals
  **/

  let idx,
      idToMetadata;
  
  const url = '/dhlab-site/assets/js/search/',
      container = document.querySelector('.search-results-container'),
      target = document.querySelector('.nav-icons .search'),
      searchBar = document.querySelector('.search-bar'),
      results = document.querySelector('#search-results'),
      mobileResults = document.querySelector('#mobile-search-results'),
      button = document.querySelector('#search-button'),
      input = document.querySelector('#search-input'),
      mobileInput = document.querySelector('#mobile-search'),
      sortBy = document.querySelector('#search-select'),
      loader = document.querySelector('.search-bar .loader'),
      breakpoint = 1200; // mobile nav breakpoint

  /**
  * Get json
  **/

  const get = (url, handleSuccess) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status === 200) {
          if (handleSuccess) handleSuccess(xmlhttp.responseText)
        } else {
          if (handleErr) handleErr(xmlhttp)
        }
      };
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  };

  /**
  * Handle json with lunr index and id to metadata
  **/

  const handleIndex = (json) => {
    idx = lunr.Index.load(JSON.parse(json));
    isLoadingDone();
  }

  const handleMetadata = (json) => {
    idToMetadata = JSON.parse(json);
    isLoadingDone();
  }

  /**
  * If loading is done hide the loader
  **/

  const isLoadingDone = () => {
    if (!idx || !idToMetadata) return;
    loader.style.display = 'none';
    button.style.display = 'block';
  }

  /**
  * Toggle the visibility of the search bar
  **/

  const toggleSearch = (e) => {
    if (searchBar.className.includes('active')) {
      searchBar.className = searchBar.className.replace('active', '')
      container.style.display = 'none';
      container.style.height = '70px';
    } else {
      searchBar.className += ' active';
      input.focus()
    }
  }

  /**
  * Submit a search on enter key
  **/

  const handleKeys = (e) => {
    if (e.keyCode === 13) search()
  }

  /**
  * Execute the search
  **/

  const search = () => {
    const val = getInputValue();
    let matches = [];
    idx.search(val).map((match) => {
      let itemMetadata = idToMetadata[match.ref];
      itemMetadata.relevance = match.score;
      matches.push(itemMetadata)
    })
    const sorted = _.chain(matches).sortBy(sortBy.value).reverse().value();
    updateResults(sorted);
  }

  /**
  * Get the current input value
  **/

  const getInputValue = () => {
    return getWidth() > breakpoint ? input.value : mobileInput.value;
  }

  /**
  * Update the displayed results
  **/

  const updateResults = (matches) => {
    const formatted = formatMatches(matches);
    const html = resultTemplate({
      items: formatted
    });
    const resultTarget = getResultsTarget();
    resultTarget.innerHTML = html;
    container.style.display = 'block';
    container.style.height = window.innerHeight + 'px';
  }

  /**
  * Perform any necessary truncation on results before rendering
  **/

  const formatMatches = (matches) => {
    if (getWidth() > breakpoint) return matches;
    const formatted = matches.map((m) => {
      m.teaser = m.teaser.substring(0, 120) + '...';
      return m;
    })
    return formatted;
  }

  /**
  * Get the window inner width
  **/

  const getWidth = () => {
    console.log(document.documentElement.clientWidth || window.innerWidth)
    return document.documentElement.clientWidth || window.innerWidth;
  }

  /**
  * Determine which results item to target
  **/

  const getResultsTarget = () => {
    return getWidth() > breakpoint ? results : mobileResults;
  }

  /**
  * Main
  **/

  if (!target || !searchBar || !results || !button || !loader) return;

  get(url + 'index.json', handleIndex);
  get(url + 'id-to-metadata.json', handleMetadata);

  sortBy.addEventListener('change', search);
  target.addEventListener('click', toggleSearch);
  input.addEventListener('keydown', handleKeys);
  button.addEventListener('click', search);
  mobileInput.addEventListener('keyup', search);
})()