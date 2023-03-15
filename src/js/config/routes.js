import { renderPosts } from '../controller/feed'
import { renderAthletes } from '../controller/athletes'

const urlPageTitle = "TestApp";
//object that maps the url to the template, title, and description
const urlRoutes = {
  404: { // should serve an actual 404 page
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
  "/athletes": {
    template: renderAthletes,
    title: `${urlPageTitle} - Athletes page`,
    description: `${urlPageTitle} - Athletes page`,
    name: 'athletes',
  },
};

export default urlRoutes;