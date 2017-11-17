(() => {
  const toggleActiveClass = (e) => {
    target.className.includes('active')
      ? target.className = e.target.className.replace(' active', '')
      : target.className += ' active';
  }

  const selector = '#footer-on-campus',
    target = document.querySelector(selector);
  target.addEventListener('click', toggleActiveClass);
})();