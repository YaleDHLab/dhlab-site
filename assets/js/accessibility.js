(() => {
  const handleKey = () => {
    const focused = document.activeElement;
    if (focused.className === 'search') {
      find('.search-bar').className = 'search-bar active';
      find('#search-input').focus();
    }
  }

  const find = selector => document.querySelector(selector);

  document.addEventListener('keyup', handleKey)
})();