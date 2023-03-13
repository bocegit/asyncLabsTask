import { getPosts, saveBookmark } from '../model/feed'
import post from '../components/feed/post'
import spinner from '../components/spinner/loadingContent'
import state from '../state'
import { select } from 'd3-selection';
import { showError } from '../utility.js';
import { setBookmarkHandler, addBookmarkAnimation, deleteBookmarkAnimation } from '../components/feed/post/footer/menu/bookmark'

const renderPosts = async (target) => {
  const spinElement = spinner(target);
  const postData = await getPosts();
  spinElement.remove();

  if (postData.status === 'success') {
    postData.data.forEach((v) => post(target, v));

    if (postData.data.length > 22) {
      state.feed.page += 1;
      state.global.onScrollLoad = false;
    }
  } else showError(postData.data);

};

const addBookmarkPost = async (postId, e) => {
  const bookmarkRes = await saveBookmark(postId);
  if (bookmarkRes.status === 'success') addBookmarkAnimation(e);
  else showError(bookmarkRes.data);
  setBookmarkHandler(e, bookmarkRes.status, 'add');
};

const deleteBookmarkPost = async (postId, e) => {
  const bookmarkRes = await saveBookmark(postId);
  if (bookmarkRes.status === 'success') deleteBookmarkAnimation(e);
  else showError(bookmarkRes.data);
  setBookmarkHandler(e, bookmarkRes.status, 'delete');
};

export { renderPosts, addBookmarkPost, deleteBookmarkPost };