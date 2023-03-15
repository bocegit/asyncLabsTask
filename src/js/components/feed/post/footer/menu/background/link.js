import { line } from 'd3-shape';

const linkBackground = (target) => {
  const data = [
    [315, 35],
    [330, 20],
    [335, 25],
    [308, 52],
    [313, 57],
    [353, 17],
    [358, 22],
    [308, 72],
    [313, 77],
    [378, 12],
    [383, 17],
    [328, 72],
    [333, 77],
    [373, 37],
    [378, 42],
    [358, 62],
  ];

  target
    .append('path')
    .attr('class', 'linkBackground')
    .attr('d', line()(data))
    .style('fill', 'none')
    .style('stroke', 'white')
    .style('stroke-width', 6);
};

export default linkBackground;