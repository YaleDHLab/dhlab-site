import * as d3 from 'd3';

(function(d3) {
  window.d3 = d3;
  if (!window.location.href.includes('404.html')) return;
  var rects = d3.select('body').selectAll('rect'),
      colors = ['#1981AA', '#FFC426', '#fff', '#000'];

  d3.select('body').selectAll('rect').transition()
    .delay(function(d) {
      return (d3.select(this).attr('x')/5) + (d3.select(this).attr('y') * 4);
    })
    .attr('fill', getRandomColor())

  setTimeout(function() {
    setInterval(update, 5)
  }, 10)

  function update() {
    var val = parseInt( Math.random() * rects.size() );
    rects.each(function(d, i) {
      if (i === val) {
        d3.select(this).attr('fill', getRandomColor())
      }
    })
  }

  function getRandomColor() {
    return colors[ parseInt( Math.random() * colors.length ) ];
  }
})(d3);