import { select } from 'd3-selection';
import { transition } from 'd3-transition';

const formattedDate = (d) => {
  const date = new Date(d);
  return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const adjustSVGHeight = (group, reset) => {
  const svg = select(group.parentNode);
  let height = svg.datum().height;

  if (!reset) {
    const groupHeight = group.getBBox().height;
    const phoneScale = height/90; 
    const padding = 20;
    height = (groupHeight > height) ? (groupHeight + padding) * phoneScale : height;
  }

  svg.transition()
    .duration(800)
    .attr('height', height);
};

export { formattedDate, adjustSVGHeight }