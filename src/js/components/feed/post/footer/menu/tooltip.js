import { select } from 'd3-selection';

const showTooltip = (e, d) => {
  // get the bounding box of the clicked icon
  const iconBBox = e.target.getBBox();
  // tooltip name
  const tooltipText = select(e.target).datum().tooltip;
  const group = select(e.target.parentNode);
  // rect must be created before text cause of layering
  const rect = group.append('rect');
  // create the text
  const text = group.append('text')
    .attr('x', iconBBox.x + 45)
    .attr('y', 5)
    .attr('dy', '.71em')
    .attr('opacity', 0)
    .attr('id', 'tooltipText')
    .style('font-size', 16)
    .style('fill', 'white')
    .style('font-weight', 'normal')
    .style('font-family', 'Arial')
    .style('cursor', 'pointer')
    .text(tooltipText)
    .transition()
    .duration(1000)
    .attr('opacity', 1);
  
  // get the text bounding box to calculate the rect size and position
  const textBBOx = text.node().getBBox();
  const padding = 10;
  const rectHeight = textBBOx.height + padding;
  const rectY = textBBOx.y - padding/2;

  rect.attr('x', textBBOx.x - padding/2)
    .attr('y', rectY + rectHeight)
    .attr('width', textBBOx.width + padding)
    .attr('height', 0)
    .attr('id', 'tooltipRect')
    .style('fill', 'black')
    .style('stroke', 'white')
    .style('stroke-width', 2); 

  rect.transition()
    .duration(800)
    .attr('height', rectHeight)
    .attr('y', rectY );

}

const removeTooltip = (e, d) => {
  const group = select(e.target.parentNode);
  group.select("#tooltipText").remove();
  group.select("#tooltipRect").remove();
}

export { showTooltip, removeTooltip }