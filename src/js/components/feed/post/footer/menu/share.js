import { adjustSVGHeight } from '/src/js/utility';
import { select } from 'd3-selection';

const sharePost = (d) => {
  // for public available app --> encodeURI(window.location.href + the route for single post);
  const link = 'https://en.wikipedia.org/wiki/TempleOS';
  const msg = encodeURIComponent('msg from post');
  const title = encodeURIComponent('title from post');
  const hashtags = 'temple,OS'; 
  let shareUrl;

  if (d.href === 'assets/twitter.svg') {
    shareUrl = `${d.url}?&url=${link}&text=${msg}&hashtags${hashtags}`;
  } else if (d.href === 'assets/facebook.svg') {
    shareUrl = `${d.url}?u=${link}`;
  } else if (d.href === 'assets/reddit.svg') {
    shareUrl = `${d.url}?url=${link}&title=${title}`;
  }

  if (shareUrl) window.open(shareUrl, '_blank');
};

const shareClick = (ev, data) => {
  select(ev.target.parentNode).selectAll('.menuIcon')
    .nodes()[1]
    .dispatchEvent(new Event('click'));
  // setTimeout is used only to show the user the close animation before oppening new tab
  setTimeout(() => sharePost(data), 900);
};

const openShare = function (e, d) {
  const icons = [
    { 
      href: 'assets/twitter.svg',
      x: 50,
      y: 100,
      width: 40,
      height: 40,
      url: 'https://www.twitter.com/share',
    },
    { 
      href: 'assets/reddit.svg',
      x: 135,
      y: 100,
      width: 40,
      height: 40,
      url: 'https://www.reddit.com/submit',
    },
    { 
      href: 'assets/facebook.svg',
      x: 220,
      y: 100,
      width: 40,
      height: 40,
      url: 'https://www.facebook.com/share.php',
    },
  ];
  const group = select(e.target.parentNode);
  const menuData = group.datum();
  if (menuData.activeMenu === 'Rating') group.selectAll('.menuIcon').nodes()[0].dispatchEvent(new Event('click'));
  menuData.activeMenu = d.tooltip;
  select(e.target).on('click', closeShare);
  group.selectAll('.shareIcon')
    .data(icons)
    .enter()
    .append('image')
    .attr('x', 0)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('opacity', 0)
    .attr('href', (d) => d.href)
    .attr('class', 'shareIcon')
    .style('cursor', 'pointer')
    .on('click', shareClick)
    .transition()
    .duration(1000)
    .delay((d, i) => 200*i)
    .attr('x', (d) => d.x)
    .attr('opacity', 1)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height);
  
  group.selectAll('.shareBackground')
    .transition()
    .delay((d, i) => 100*i)
    .duration(1000)
    .attr('x', (d) => d.transition.x)
    .attr('y', (d) => d.transition.y)
    .attr('width', (d) => d.transition.width)
    .attr('height', (d) => d.transition.height)
    .attr('rx', (d) => d.transition.rx)
    .attr('ry', (d) => d.transition.ry)
    .style('fill', (d) => d.transition.fill)
    .style('stroke', (d) => d.transition.stroke)
    .style('stroke-width', (d) => d.transition.strokeWidth);

  adjustSVGHeight(group.node());
};

const closeShare = function (e, d) {
  const group = select(e.target.parentNode);
  group.datum().activeMenu = "";
  select(e.target).on('click', openShare);
  group.selectAll('.shareBackground')
    .transition()
    .duration(1000)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('rx', (d) => d.rx)
    .attr('ry', (d) => d.ry)
    .style('fill', (d, i) => d.fill)
    .style('stroke', (d) => d.stroke)
    .style('stroke-width', (d) => d.strokeWidth);
  group.selectAll('.shareIcon').remove();
  adjustSVGHeight(group.node(), true);
};

const share = {
  tooltip: "Share",
  href: 'assets/share.svg',
  width: 44,
  height: 44,
  x: 125,
  y: 23,
  fill: 'blue',
};

export { share, openShare }