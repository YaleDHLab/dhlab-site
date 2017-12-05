(() => {
  const targets = document.querySelectorAll('.share-container');

  const handleClick = (idx, e) => {
    targets[idx].className = targets[idx].className.includes('active')
      ? 'share-container'
      : 'share-container active'; 
  }

  for (var i=0; i<targets.length; i++) {
    targets[i].addEventListener('click', handleClick.bind(null, i));
  }
})()