(function() {

  /**
  * Desktop header
  **/

  var navicon = document.querySelector('.navicon');

  function handleNaviconClick(e) {
    navicon.className = navicon.className.includes('active') ?
        'navicon'
      : 'navicon active';
  }

  function handleWindowClick(e) {
    try {
      if (e.target.className.includes('navicon')) return;
    } catch(err) {}
    navicon.className = 'navicon';
  }

  navicon.addEventListener('click', handleNaviconClick);
  window.addEventListener('click', handleWindowClick);

  /**
  * Mobile header
  **/

  var links = [],
      containers = document.querySelectorAll('.link');

  for (var i=0; i<containers.length; i++) {
    links.push(containers[i].querySelector('a'));
  }

  for (var i=0; i<links.length; i++) {
    links[i].addEventListener('click', handleLinkClick);
  }

  function handleLinkClick(e) {
    var elem = e.target;

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

})();