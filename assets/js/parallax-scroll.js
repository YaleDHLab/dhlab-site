(function() {
  var hero = document.querySelector('.hero.background-image');

  if (!hero) return;

  window.addEventListener('scroll', handleScroll);

  function handleScroll(e) {
    var y = window.scrollY;
    hero.style.backgroundPositionY = window.innerWidth < 1000 ?
        0
      : (-(y/4) - 100) + 'px';
  }

})();