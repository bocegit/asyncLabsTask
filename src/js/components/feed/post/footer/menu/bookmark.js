import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { arc } from 'd3-shape';
import { addBookmarkPost, deleteBookmarkPost } from '/src/js/controller/feed';

const addBookmark = (e) => {
  const postId = select(e.target.parentNode).datum().postId;
  select(e.target).on('click', null);
  addBookmarkPost(postId, e);
};

const deleteBookmark = (e) => { 
  const postId = select(e.target.parentNode).datum().postId;
  select(e.target).on('click', null);
  deleteBookmarkPost(postId, e);
};

const setBookmarkHandler = (e, status, action) => {
  const sel = select(e.target);

  if (action === 'add') {
    if (status === 'success') sel.on('click', deleteBookmark);
    else sel.on('click', addBookmark);
  } else {
    if (status === 'success') sel.on('click', addBookmark);
    else sel.on('click', deleteBookmark);
  }
};

const addBookmarkAnimation = (e) => {
  select(e.target.parentNode).selectAll('.bookmarkBackground')
    .each(function(d, i) {
      const arcGen = arc()
        .innerRadius(d.innerRadius)
        .outerRadius(d.outerRadius)
        .startAngle(d.startAngle)
        .padAngle(.02)
        .padRadius(100)
        .cornerRadius(4);
      
        select(this).transition()
          .duration(1000)
          .delay(i*200)
          .attrTween('d', () => {
            const interp = interpolate(d.endAngle, d.newAngle);
            const ob = {};
    
            return function (t) {
              ob.endAngle = interp(t);
              return arcGen(ob);
            };
          });
    });
};

const deleteBookmarkAnimation = (e) => { 
  select(e.target.parentNode).selectAll('.bookmarkBackground')
  .each(function(d, i) {
    const arcGen = arc()
      .innerRadius(d.innerRadius)
      .outerRadius(d.outerRadius)
      .startAngle(d.startAngle)
      .padAngle(.02)
      .padRadius(100)
      .cornerRadius(4);
    
      select(this).transition()
        .duration(1000)
        .delay(i*200)
        .attrTween('d', () => {
          const interp = interpolate(d.newAngle, d.endAngle);
          const ob = {};
  
          return function (t) {
            ob.endAngle = interp(t);
            return arcGen(ob);
          };
        });
  });
};

const bookmark = {
  tooltip: "Bookmark",
  href: 'assets/bookmark.svg',
  width: 44,
  height: 44,
  x: 222,
  y: 23,
  fill: 'blue',
};

export { bookmark, setBookmarkHandler, addBookmarkAnimation, deleteBookmarkAnimation, deleteBookmark, addBookmark };