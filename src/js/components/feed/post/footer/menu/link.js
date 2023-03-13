import { line } from 'd3-shape';
import { select } from 'd3-selection';
import { interpolateString } from 'd3-interpolate';

const openLink = (e, d) => {
  const data = [
    [358, 62],
    [378, 42],
    [373, 37],
    [333, 77],
    [328, 72],
    [383, 17],
    [378, 12],
    [313, 77],
    [308, 72],
    [358, 22],
    [353, 17],
    [313, 57],
    [308, 52],
    [335, 25],
    [330, 20],
    [315, 35],
  ];
  const linkNode = select(e.target);
  linkNode.on('click', null);

  select(e.target.parentNode).append('path')
    .attr('class', 'linkAnimationBackground')
    .attr('d', line()(data))
    .attr('opacity', 0)
    .style('fill', 'none')
    .style('stroke', 'black')
    .style('stroke-width', 6)
    .transition()
    .duration(1000)
    .attrTween('stroke-dasharray', function () {
      const len = this.getTotalLength();
      select(this).attr('opacity', 1);

      return function (t) {
        return interpolateString(`0, ${len}`, `${len}, 0`)(t);
      };
    })
    .on('end', function() {
      const url = ( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) )
        ? "vnd.youtube://4KnNVK-udTU" 
        : "https://youtube.com/watch?v=4KnNVK-udTU";
        
      window.open(url, '_blank');
      linkNode.on('click', openLink);
      this.remove();
    });
};

const link = {
  tooltip: "Link",
  href: 'assets/link.svg',
  width: 60,
  height: 60,
  x: 310,
  y: 15,
  fill: 'blue',
};

export { link, openLink }