import { select } from 'd3-selection';
import { adjustSVGHeight } from '/src/js/utility';
import { transition } from 'd3-transition';

const textClick = function(e, d) {
  select(e.target.parentNode).datum().rating = parseInt(e.target.textContent);
  closeRating(e, d);
};

const openRating = function (e, d) {
  const group = select(e.target.parentNode);
  const menuData = group.datum();
  if (menuData.activeMenu === 'Share') group.selectAll('.menuIcon').nodes()[1].dispatchEvent(new Event('click'));
  menuData.activeMenu = d.tooltip;
  select(e.target).on('click', closeRating);
  group.selectAll('.ratingBackground')
    .each(function(d, i) {
      const trans = d.transition;
      select(this.parentNode).append('text')
        .attr('x', trans.x)
        .attr('y', 100)
        .attr('dy', '.71em')
        .attr('opacity', 0)
        .attr('class', 'ratingText')
        .style('font-size', 24)
        .style('fill', 'white')
        .style('font-weight', 'bold')
        .style('font-family', 'Arial')
        .style('cursor', 'pointer')
        .text(i + 1)
        .on('click', textClick)
        .transition()
        .duration(1000)
        .attr('opacity', 1);

      const rectHeightIncrement = i*5;

      select(this).transition()
        .duration(1000)
        .attr('x', trans.x - 15)
        .attr('y', 88 - rectHeightIncrement/2)
        .attr('width', 10)
        .attr('height', 40 + rectHeightIncrement)
        .style('fill', 'black')
        .style('stroke', 'none')
        .style('stroke-width', 0)
        .attr('rx', 52)
        .attr('ry', 90);

      /* const textBBOx = text.node().getBBox();
      const padding = 20;
      const paddingY = 20;
      const heightWidthDifference = textBBOx.height - textBBOx.width;

      select(this).transition()
        .duration(1000)
        .attr('x', textBBOx.x - padding/2 - heightWidthDifference/2 + 20 + 20)
        .attr('y', textBBOx.y - padding/2 - paddingY/2)
        .attr('width', textBBOx.width + heightWidthDifference + padding - 40)
        .attr('height', textBBOx.height + padding + paddingY)
        .style('fill', 'black')
        .style('stroke', 'none')
        .style('stroke-width', 0)
        .attr('rx', 52)
        .attr('ry', 90); */
    });

  adjustSVGHeight(e.target.parentNode);
};

const closeRating = function (e, d) { 
  const group = select(e.target.parentNode);
  const menuData = group.datum();
  const ratingValue = menuData.rating;
  select(e.target).on('click', openRating);
  menuData.activeMenu = "";
  group.selectAll('.ratingBackground')
    .transition()
    .duration(1000)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .style('fill', (d, i) => (i < ratingValue) ? 'gray' : d.fill)
    .style('stroke', (d) => d.stroke)
    .style('stroke-width', (d) => d.strokeWidth);
  group.selectAll('.ratingText').remove();
  adjustSVGHeight(group.node(), true);
};

const rating = {
  tooltip: "Rating",
  href: 'assets/rating.png',
  width: 50,
  height: 50,
  x: 30,
  y: 20,
  fill: 'blue',
  onclick: openRating,
};

export default rating;