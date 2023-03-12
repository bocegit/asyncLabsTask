import error from './components/error/error.js'
import { renderPosts } from './controller/feed'
import state from './state'

const urlPageTitle = "TestApp";

// create document click that watches the nav links only - event delegation
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

// create an object that maps the url to the template, title, and description
const urlRoutes = {
  404: {
    template: error,
    title: urlPageTitle + " | 404 ",
    description: "Page not found",
    name: '404'
  },
  "/": {
    template: renderPosts,
    title: urlPageTitle + " | Feed page",
    description: urlPageTitle + " | Feed page",
    name: 'feed',
  },
};

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

// create a function that handles the url location
const urlLocationHandler = () => {
  const container = document.getElementById("content");
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  
  state.global.onScrollLoad = true;
  // empty the container
  container.innerHTML = "";

  // get the route object from the urlRoutes object
  const route = urlRoutes[location] || urlRoutes["404"];

  for (const property in state) {
    if (property !== 'global') {
      const ob = state[property];
      ob.page = 1;

      if (route.name === property) ob.active = true;
      else ob.active = false;
    }
  }

  route.template(container, route.description);

  // get the html from the template
  /* const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html; */

  
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

export { urlLocationHandler, urlRoute };