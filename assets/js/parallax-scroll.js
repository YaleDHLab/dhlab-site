(function() {
  var hero = document.querySelector('.hero.background-image');

  if (!hero) return;

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  function handleScroll(e) {
    var y = window.scrollY;
    hero.style.backgroundPositionY = window.innerWidth < 1000 ?
        0
      : (-(y*1.5) - 120) + 'px';
  }

})();