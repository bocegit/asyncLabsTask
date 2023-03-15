import { urlLocationHandler, urlRoute } from './router'
import state from './state'
import { renderPosts } from './controller/feed'

const init = () => {
  const btnTop = document.getElementById("btn-top");
  // move to the top of the document
  btnTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  // add an event listener to the window that watches for url changes
  window.onpopstate = urlLocationHandler;
  // add the url route
  window.route = urlRoute;

  window.addEventListener('scroll', () => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement;

    // load posts when near the end
    if (scrollTop + clientHeight >= scrollHeight - 200 && !state.global.onScrollLoad) {
      // prevent loading content on scroll 
      state.global.onScrollLoad = true;
      // check for the page and load
      if (state.feed.active) renderPosts(document.getElementById('content'));
    }

    // display the back to top button if scrolled down
    if (document.body.scrollTop > 20 || scrollTop > 20) {
        btnTop.style.display = "block";
    } else btnTop.style.display = "none";

  }, { // passive listener for better scroll performance
    passive: true
  });
}

export default init;
