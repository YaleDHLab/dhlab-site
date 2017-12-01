import * as d3 from 'd3';

(function(d3) {
  if (!window.location.href.includes('404.html')) return;
  var rects = d3.select('body').selectAll('rect'),
      colors = ['#1981AA', '#FFC426', '#fff', '#000'];

  setInterval(update, 5)

  function update() {
    var val = parseInt( Math.random() * rects.size() );
    var color = colors[ parseInt( Math.random() * colors.length ) ];
    rects.each(function(d, i) {
      if (i === val) {
        d3.select(this).attr('fill', color)
      }
    })
  }
})(d3);