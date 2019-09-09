(() => {

  // polyfill to ensure doc.querySelectorAll returns array
  NodeList.prototype.forEach = Array.prototype.forEach;

  /**
  * Desktop header
  **/

  let links = [];

  const navicon = document.querySelector('.navicon'),
    mobileClose = document.querySelector('.close-mobile-header'),
    containers = document.querySelectorAll('.link'),
    expandNavButtons = document.querySelectorAll('.link-expand-button');

  /**
  * Toggle navicon visibility
  **/

  const toggleNavicon = () => {
    navicon.className = navicon.className.includes('active')
      ? 'navicon'
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

  const handleMobileCloseClick = () => {
    navicon.className = 'navicon';
  }

  /**
  * Mobile header
  **/

  const handleLinkClick = (e) => {
    const elem = e.target;
    try {
      /* Projects is a special case as it has no children */
      const parentClass = e.target.parentNode.className;
      if (parentClass.includes('link') &&
          !parentClass.includes('projects') &&
          window.innerWidth < 900) {
        e.preventDefault();
        e.stopPropagation();
      }
    } catch(err) {}

    /* Toggle the active state of the element */
    elem.className = elem.className.includes(' active ')
      ? elem.className.replace(' active ', '')
      : elem.className + ' active ';
  }

  /**
  * On click of hidden buttons, show/hide nav subitems (for accessibility)
  **/

  expandNavButtons.forEach((b) => b.addEventListener('click', (e) => {
    expandNavButtons.forEach((b) => {
      b.parentNode.className = b.parentNode.className.replace(' expanded', '');
    })
    e.target.parentNode.className = e.target.parentNode.className + ' expanded';
  }))

  /**
  * Main
  **/

  containers.forEach((c) => links.push(c.querySelector('a')));
  links.forEach((l) => l.addEventListener('click', handleLinkClick));

  window.addEventListener('click', handleWindowClick);
  navicon.addEventListener('click', toggleNavicon);
  mobileClose.addEventListener('click', handleMobileCloseClick);
})();