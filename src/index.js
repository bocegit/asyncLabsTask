import './styles/main.scss'
// needed for babel to deal with async await
import 'regenerator-runtime/runtime';
// icons
import './assets/laughing.svg'
import './assets/bookmark.svg'
import './assets/link.svg'
import './assets/rating.png'
import './assets/share.svg'
import './assets/twitter.svg'
import './assets/reddit.svg'
import './assets/facebook.svg'
// web components
import './js/components/athletes/athleteBox'
import './js/components/athletes/athleteBox/athleteInfo'
import './js/components/athletes/athleteBox/athleteFollow'
import initGlobalHandlers from './js/globalHandlers'
import { urlLocationHandler } from './js/router'
// video js library req
require('!style-loader!css-loader!video.js/dist/video-js.css')

// adding global event listeners
initGlobalHandlers();
// used to determine the page and start rendering
urlLocationHandler();

