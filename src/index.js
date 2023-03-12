import './styles/main.scss'
import "regenerator-runtime/runtime";
// import "core-js/features/promise"; // "core-js/stable";
import laughing from './assets/laughing.svg'
import rating from './assets/rating.png'
import share from './assets/share.svg'
import twitterIcon from '/src/assets/twitter.svg'
import redditIcon from '/src/assets/reddit.svg'
import facebookIcon from '/src/assets/facebook.svg'
import 'bootstrap'
import initGlobalHandlers from './js/globalHandlers'
import { urlLocationHandler } from './js/router'
require('!style-loader!css-loader!video.js/dist/video-js.css')

initGlobalHandlers();
urlLocationHandler();
