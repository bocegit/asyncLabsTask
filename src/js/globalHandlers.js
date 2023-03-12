import { urlLocationHandler, urlRoute } from './router'
import state from './state'
import { renderPosts } from './controller/feed'

const init = () => {
  const btnTop = document.getElementById("btn-top");

  btnTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  // add an event listener to the window that watches for url changes
  window.onpopstate = urlLocationHandler;
  // call the urlLocationHandler function to handle the initial url
  window.route = urlRoute;

  window.addEventListener('scroll', () => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 200 && !state.global.onScrollLoad) {
      state.global.onScrollLoad = true;
      if (state.feed.active) renderPosts(document.getElementById('content'));
    }

    if (document.body.scrollTop > 20 || scrollTop > 20) {
        btnTop.style.display = "block";
    } else btnTop.style.display = "none";

  }, {
    passive: true
  });
}

export default init;
