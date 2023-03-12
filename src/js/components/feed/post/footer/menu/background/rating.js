const ratingBackground = (target) => {
  const profile = {
    rx: 30,
    ry: 4,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 0,
  };
  const data = [
    {
      x: 30,
      y: 62,
      width: 50,
      height: 6,
      transition: {
        x: 20,
        y: 90,
      },
    },
    {
      x: 22.5,
      y: 52,
      width: 65,
      height: 8,
      transition: {
        x: 55,
        y: 115,
      },
    },
    {
      x: 15,
      y: 40,
      width: 80,
      height: 10,
      transition: {
        x: 90,
        y: 85,
      },
    },
    {
      x: 22.5,
      y: 30,
      width: 65,
      height: 8,
      transition: {
        x: 125,
        y: 120,
      },
    },
    {
      x: 30,
      y: 22,
      width: 50,
      height: 6,
      transition: {
        x: 160,
        y: 95,
      },
    },
  ];
  data.forEach((v) => Object.assign(v, profile));

  target.selectAll('.ratingBackground')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('rx', (d) => d.rx)
    .attr('ry', (d) => d.ry)
    .attr('class', 'ratingBackground')
    .style('fill', (d) => d.fill)
    .style('stroke', (d) => d.stroke)
    .style('stroke-width', (d) => d.strokeWidth);

};

export default ratingBackground;