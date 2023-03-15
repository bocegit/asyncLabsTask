import { select } from 'd3-selection';
import { adjustSVGHeight } from '/src/js/utility';
import { transition } from 'd3-transition';

const textClick = function(e, d) {
  // set the rating on the menu state object
  select(e.target.parentNode).datum().rating = parseInt(e.target.textContent);
  closeRating(e, d);
};

const openRating = function (e, d) {
  const group = select(e.target.parentNode);
  const menuData = group.datum();

  // check for active menu and close it
  if (menuData.activeMenu === 'Share') {
    group.selectAll('.menuIcon').nodes()[1].dispatchEvent(new Event('click'));
  }
  
  // set the active menu to this
  menuData.activeMenu = d.tooltip;

  // attach handlers for closing
  select(e.target)
    .on('click', closeRating)
    .on('keypress', (e, d) => {
      if (e.keyCode === 13) closeRating(e, d);
    });

  // transition background elements and create text ratings
  group.selectAll('.ratingBackground')
    .each(function(d, i) {
      const trans = d.transition;
      select(this.parentNode)
        .append('text')
        .attr('x', trans.x)
        .attr('y', 100)
        .attr('dy', '.71em')
        .attr('opacity', 0)
        .attr('class', 'ratingText')
        .attr('tabindex', 0)
        .attr('focusable', 'true')
        .attr('alt', `rate post with value ${i + 1}`)
        .attr('aria-label', `rate post with value ${i + 1}`)
        .attr('role', 'button')
        .style('font-size', 24)
        .style('fill', 'white')
        .style('font-weight', 'bold')
        .style('font-family', 'Arial')
        .style('cursor', 'pointer')
        .text(i + 1)
        .on('click', textClick)
        .on('keypress', (e, d) => {
          if (e.keyCode === 13) textClick(e, d);
        })
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
    });

  adjustSVGHeight(e.target.parentNode);
};

const closeRating = function (e, d) { 
  const group = select(e.target.parentNode);
  const menuData = group.datum();
  const ratingValue = menuData.rating;
  // clear the active menu from the menu state object
  menuData.activeMenu = "";
  // attach handlers for opening rating options
  select(e.target)
    .on('click', openRating)
    .on('keypress', (e, d) => {
      if (e.keyCode === 13) openRating(e, d);
    });
  
  // transition background to inital position
  group.selectAll('.ratingBackground')
    .transition()
    .duration(1000)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    // check for the rating and fill accordingly
    .style('fill', (d, i) => (i < ratingValue) ? 'gray' : d.fill)
    .style('stroke', (d) => d.stroke)
    .style('stroke-width', (d) => d.strokeWidth);
  
  // remove rating text
  group.selectAll('.ratingText').remove();
  adjustSVGHeight(group.node(), true);
};

// config for the rating item
const rating = {
  tooltip: "Rating",
  href: 'assets/rating.png',
  width: 50,
  height: 50,
  x: 30,
  y: 20,
  fill: 'blue',
  alt: 'rating',
};

export { rating, openRating };