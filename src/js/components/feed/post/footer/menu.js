import { select } from 'd3-selection';
import ratingBackground from './menu/background/rating';
import shareBackground from './menu/background/share';
import rating from './menu/rating';
import share from './menu/share';
import { showTooltip, removeTooltip } from './menu/tooltip';

const menu = (target, data) => {
  const items = [rating, share];
  const width = (window.innerWidth < 600 ) ? 300 : 400;
  const height = (window.innerWidth < 600 ) ? 70 : 90;
  const g = select(target)
    .append('svg')
    .datum({ width: width, height: height})
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('viewBox', '0 0 400 90')
    .attr('preserveAspectRatio', 'xMinYMin')
    .style('background-color', 'red')
    .append('g')
    .datum({ rating: 0, activeMenu: "" });
  
  ratingBackground(g);
  shareBackground(g);
  
  g.selectAll('.menuIcon')
    .data(items)
    .enter()
    .append('image')
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('href', (d) => d.href)
    .attr('class', 'menuIcon')
    .attr('cursor', 'pointer')
    .on('click', (e, d) => d.onclick(e, d))
    .on('mouseover', showTooltip)
    .on('mouseout', removeTooltip);

};

export default menu;