const shareBackground = (target) => {
  const profile = {
    fill: 'white',
    stroke: 'none',
    //stroke_width: 2,
  };
  const data = [
    {
      x: 118,
      y: 10,
      width: 40,
      height: 40,
      rx: 20,
      ry: 20,
      transition: {
        x: 153.5,
        y: 65,
        width: 4,
        height: 30,
        rx: 0,
        ry: 0,
        fill: 'black',
        stroke: 'none',
        strokeWidth: 0,
      },
    },
    {
      x: 148,
      y: 10,
      width: 30,
      height: 30,
      rx: 15,
      ry: 15,
      transition: {
        x: 180,
        y: 133,
        width: 50,
        height: 4,
        rx: 0,
        ry: 0,
        fill: 'black',
        stroke: 'none',
        strokeWidth: 0,
      },
    },
    {
      x: 148,
      y: 25,
      width: 35,
      height: 35,
      rx: 17.5,
      ry: 17.5,
      transition: {
        x: 95,
        y: 103,
        width: 50,
        height: 4,
        rx: 0,
        ry: 0,
        fill: 'black',
        stroke: 'none',
        strokeWidth: 0,
      },
    },
    {
      x: 143,
      y: 42,
      width: 30,
      height: 30,
      rx: 15,
      ry: 15,
      transition: {
        x: 40,
        y: 90,
        width: 60,
        height: 60,
        rx: 30,
        ry: 30,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
      },
    },
    {
      x: 123,
      y: 45,
      width: 30,
      height: 30,
      rx: 15,
      ry: 15,
      transition: {
        x: 125,
        y: 90,
        width: 60,
        height: 60,
        rx: 30,
        ry: 30,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
      },
    },
    {
      x: 113,
      y: 30,
      width: 40,
      height: 40,
      rx: 20,
      ry: 20,
      transition: {
        x: 210,
        y: 90,
        width: 60,
        height: 60,
        rx: 30,
        ry: 30,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
      },
    },
  ];
  data.forEach((v) => Object.assign(v, profile));

  target.selectAll('.shareBackground')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('rx', (d) => d.rx)
    .attr('ry', (d) => d.ry)
    .attr('class', 'shareBackground')
    .style('fill', (d) => d.fill)
    .style('stroke', (d) => d.stroke)
    .style('stroke-width', 0);

};

export default shareBackground;