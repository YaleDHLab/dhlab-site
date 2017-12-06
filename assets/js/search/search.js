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
    breakpoint = 900; // mobile nav breakpoint

  /**
  * Get json
  **/

  const get = (url, handleSuccess) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status === 200) {
          if (handleSuccess) handleSuccess(xmlhttp.responseText)
        }
      }
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

  const toggleSearch = () => {
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
    if (e.keyCode === 13) search(e)
  }

  /**
  * Execute the search
  **/

  const search = (e) => {
    const val = getInputValue();
    val.includes('"') ? runExactSearch(val) : runFuzzySearch(val)
    if (isMobile()) {
      mobileResults.style.display = e.target.value.length ? 'block' : 'none';
    }
  }

  /**
  * Run a fuzzy search
  **/

  const runFuzzySearch = (val) => {
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
  * Run an exact or "phrase" search
  **/

  const runExactSearch = (val) => {
    let matches = [];
    get(url + '/documents.json', (data) => {
      const lowered = val.substring(1, val.length-1).toLowerCase();
      JSON.parse(data).map((d) => {
        const field = d.content.replace('\n',' ').split(' ').join(' ');
        const loweredField = field.toLowerCase();
        if (loweredField.indexOf(lowered) > -1) {
          matches.push(d)
        }
      })
      updateResults(matches)
    })
  }

  /**
  * Get the current input value
  **/

  const getInputValue = () => {
    return isMobile() ? mobileInput.value : input.value;
  }

  /**
  * Update the displayed results
  **/

  const updateResults = (matches) => {
    const resultTarget = getResultsTarget();
    if (matches.length) {
      const formatted = formatMatches(matches);
      const html = resultTemplate({
        items: formatted
      });
      resultTarget.innerHTML = html;
    } else {
      resultTarget.innerHTML = 'No Results';
    }
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
    return document.documentElement.clientWidth || window.innerWidth;
  }

  /**
  * Determine whether the browser agent is mobile
  **/

  const isMobile = () => {
    return getWidth() <= breakpoint;
  }

  /**
  * Determine which results item to target
  **/

  const getResultsTarget = () => {
    return isMobile() ? mobileResults : results;
  }

  /**
  * Remove search state on window resize
  **/

  const handleResize = (e) => {
    container.style.display = 'none';
    mobileResults.style.display = 'none';
    searchBar.className = searchBar.className.replace('active', '');
  }

  /**
  * Main
  **/

  if (!target || !searchBar || !results || !button || !loader) return;

  get(url + 'index.json', handleIndex);
  get(url + 'id-to-metadata.json', handleMetadata);

  window.addEventListener('resize', handleResize);
  sortBy.addEventListener('change', search);
  target.addEventListener('click', toggleSearch);
  input.addEventListener('keydown', handleKeys);
  button.addEventListener('click', search);
  mobileInput.addEventListener('keyup', search);
})()