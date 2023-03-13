import { renderPosts } from '../controller/feed'

const urlPageTitle = "TestApp";
// create an object that maps the url to the template, title, and description
const urlRoutes = {
  404: {
    template: () => window.location = 'https://en.wikipedia.org/wiki/HTTP_404',
    title: `${urlPageTitle} - 404`,
    description: "Page not found",
    name: '404'
  },
  "/": {
    template: renderPosts,
    title: `${urlPageTitle} - Feed page`,
    description: `${urlPageTitle} - Feed page`,
    name: 'feed',
  },
};

export default urlRoutes;