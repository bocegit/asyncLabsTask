import { getPosts } from '../model/feed'
import post from '../components/feed/post'
import spinner from '../components/spinner/loadingContent'
import state from '../state'

const renderPosts = async (target) => {
  const spinElement = spinner(target);
  const postData = await getPosts();
  spinElement.remove();
  postData.forEach((v) => post(target, v));

  if (postData.length > 22) {
    state.feed.page += 1;
    state.global.onScrollLoad = false;
  }
};

export { renderPosts };