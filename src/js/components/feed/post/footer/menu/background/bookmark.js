import { arc } from 'd3-shape';
import { schemePastel1 } from 'd3-scale-chromatic';

const reverseArcAngle = (data) => {
  data.forEach((v) => {
    const newAngle = v.newAngle;
    v.newAngle = v.endAngle;
    v.endAngle = newAngle;
  })
}

const bookmarkBackground = (target, bookmarked) => {
  const fullCircle = 2 * Math.PI;
  // used to draw the arc
  const arcGenerator = arc()
	.padAngle(.02)
	.padRadius(100)
	.cornerRadius(4);

  const arcData = [
    {
      startAngle: 0.75 * fullCircle,
      endAngle: 1 * fullCircle, // angle for not bookmarked post
      newAngle: 1.5 * fullCircle, // angle for bookmarked post
      innerRadius: 15,
      outerRadius: 40,
    },
    {
      startAngle: 0.5 * fullCircle,
      endAngle: 0.75 * fullCircle,
      newAngle: 1.25 * fullCircle,
      innerRadius: 15,
      outerRadius: 35,
    },
    {
      startAngle: 0.25 * fullCircle,
      endAngle: 0.5 * fullCircle,
      newAngle: fullCircle,
      innerRadius: 15,
      outerRadius: 31,
    },
    {
      startAngle: 0,
      endAngle: 0.25 * fullCircle,
      newAngle: 0.75 * fullCircle,
      innerRadius: 15,
      outerRadius: 28,
    },
  ];

  // check if its bookmarked and reverse the initial position 
  if (bookmarked) reverseArcAngle(arcData);

  // create the background
  target
    .append('g')
    .attr('transform', 'translate(244, 45)')
    .selectAll('.bookmarkBackground')
    .data(arcData)
    .enter()
    .append('path')
    .attr('class', 'bookmarkBackground')
    .attr('d', (d) => arcGenerator(d))
    .style('fill', (d, i) => schemePastel1[i]);
  
  // check if its bookmarked and return the initial position
  if (bookmarked) reverseArcAngle(arcData);

};

export default bookmarkBackground;