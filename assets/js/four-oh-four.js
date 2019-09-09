import { select } from 'd3-selection';
import transition from 'd3-transition';

(function() {
  if (!document.querySelector('.four-oh-four')) return;
  var rects = select('body').selectAll('rect'),
    colors = ['#1981AA', '#FFC426', '#fff', '#000'];

  select('body').selectAll('rect').transition()
    .delay(function() {
      return (select(this).attr('x')/5) + (select(this).attr('y') * 4);
    })
    .attr('fill', getRandomColor())

  setTimeout(function() {
    setInterval(update, 5)
  }, 10)

  function update() {
    var val = parseInt( Math.random() * rects.size() );
    rects.each(function(d, i) {
      if (i === val) {
        select(this).attr('fill', getRandomColor())
      }
    })
  }

  function getRandomColor() {
    return colors[ parseInt( Math.random() * colors.length ) ];
  }
})();