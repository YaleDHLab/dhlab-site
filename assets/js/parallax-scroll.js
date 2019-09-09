(() =>  {
  const hero = document.querySelector('.hero.background-image');

  if (!hero) return;

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  function handleScroll() {
    const y = window.scrollY || window.pageYOffset;
    hero.style.backgroundPositionY = window.innerWidth < 1000
      ? 0
      : (-(y*1.5) - 120) + 'px';
  }

})();