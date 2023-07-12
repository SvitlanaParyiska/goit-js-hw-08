import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onPlay, 1000));

let theme = '';

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);

  theme = localStorage.getItem('videoplayer-current-time');
  console.log(theme);
  player.setCurrentTime(theme);
}

// if (theme) {
//   console.log(theme);
// }

player
  .setCurrentTime(theme)
  .then(function (seconds) {
    console.log('test');
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video`s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
