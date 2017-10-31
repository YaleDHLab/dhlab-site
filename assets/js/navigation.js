(() => {

  // polyfill to ensure doc.querySelectorAll returns array
  NodeList.prototype.forEach = Array.prototype.forEach;

  /**
  * Desktop header
  **/

  let links = [];

  const navicon = document.querySelector('.navicon'),
        mobileClose = document.querySelector('.close-mobile-header'),
        containers = document.querySelectorAll('.link');

  /**
  * Toggle navicon visibility
  **/

  const toggleNavicon = (e) => {
    navicon.className = navicon.className.includes('active') ?
        'navicon'
      : 'navicon active';
  }

  /**
  * On window clicks close the navicon
  **/

  const handleWindowClick = (e) => {
    try {
      const targetClass = e.target.className;
      if (targetClass.includes('navicon') || targetClass.includes('mobile-search')) {
        return;
      }
    } catch(err) {}
    navicon.className = 'navicon';
  }

  /**
  * Close the navicon
  **/

  const handleMobileCloseClick = (e) => {
    navicon.className = 'navicon';
  }

  /**
  * Mobile header
  **/

  const handleLinkClick = (e) => {
    const elem = e.target;

    /* Projects is a special case as it has no children */
    if (!elem.parentNode.className.includes('projects')) {
      e.preventDefault();
      e.stopPropagation();
    }

    /* Toggle the active state of the element */
    elem.className = elem.className.includes(' active ') ?
        elem.className.replace(' active ', '')
      : elem.className + ' active ';
  }

  /**
  * Main
  **/

  containers.forEach((c) => links.push(c.querySelector('a')));
  links.forEach((l) => l.addEventListener('click', handleLinkClick));

  window.addEventListener('click', handleWindowClick);
  navicon.addEventListener('click', toggleNavicon);
  mobileClose.addEventListener('click', handleMobileCloseClick);

})();