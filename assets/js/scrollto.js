(() => {
  const getPosition = (elem) => {
    let xPosition = 0;
    let yPosition = 0;
    while (elem) {
      xPosition += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
      yPosition += (elem.offsetTop - elem.scrollTop + elem.clientTop);
      elem = elem.offsetParent;
    }
    return { x: xPosition, y: yPosition };
  }

  const scroll = () => {
    const search = window.location.search;
    if (!search.includes('scrollto')) return;
    const id = search.split('scrollto=')[1].split('&')[0];
    const offsets = getPosition(document.querySelector('#' + id));
    setTimeout(() => {
      window.scroll(0, offsets.y - 90);
    }, 100)
  }

  window.addEventListener('load', scroll)
})();