import { select } from 'd3-selection';
import ratingBackground from './menu/background/rating';
import shareBackground from './menu/background/share';
import bookmarkBackground from './menu/background/bookmark';
import linkBackground from './menu/background/link';
import { rating, openRating } from './menu/rating';
import { share, openShare } from './menu/share';
import { bookmark, deleteBookmark, addBookmark } from './menu/bookmark';
import { link, openLink } from './menu/link';
import { showTooltip, removeTooltip } from './menu/tooltip';

const menu = (target, data) => {
  const items = [rating, share, bookmark, link];
  const width = (window.innerWidth < 600 ) ? 300 : 400;
  const height = (window.innerWidth < 600 ) ? 70 : 90;
  const menuData = { 
    rating: 0, 
    activeMenu: "",
    postId: data.id
  };
  const g = select(target)
    .append('svg')
    .datum({ width: width, height: height})
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('viewBox', '0 0 400 90')
    .attr('preserveAspectRatio', 'xMinYMin')
    .style('background-color', 'red')
    .append('g')
    .datum(menuData);
  
  ratingBackground(g);
  shareBackground(g);
  bookmarkBackground(g, data.bookmarked);
  linkBackground(g);

  items.forEach((v) => {
    let handler;
    
    if (v.tooltip === 'Rating') handler = openRating;
    else if (v.tooltip === 'Share') handler = openShare;
    else if (v.tooltip === 'Bookmark') handler = (data.bookmarked) ? deleteBookmark : addBookmark;
    else handler = openLink;

    g.append('image')
      .datum(v)
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .attr('width', (d) => d.width)
      .attr('height', (d) => d.height)
      .attr('href', (d) => d.href)
      .attr('class', 'menuIcon')
      .attr('cursor', 'pointer')
      .on('click', handler) // (e, d) => d.onclick(e, d))
      .on('mouseover', showTooltip)
      .on('mouseout', removeTooltip);

  });
};

export default menu;