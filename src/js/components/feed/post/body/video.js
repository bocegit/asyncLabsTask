import videojs from 'video.js'

const video = (target, data) => {
  const videoElement = document.createElement('video-js');

  videojs(videoElement, {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: data.video.url,
      type: 'video/mp4' // cant use data.video.type because the wrong type is returned from the api
    }]
  });

  target.appendChild(videoElement);
};

export default video;