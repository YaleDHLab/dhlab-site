(function() {
  function rotate() {
    var container = document.querySelector('.site-brand');
    var block = document.querySelector('#rotating-block');
    container.style.overflow = 'visible';
    block.className = 'rotated';
  }
  setTimeout(rotate, 1500);
})()