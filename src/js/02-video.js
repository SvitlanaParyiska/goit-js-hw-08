import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const setStorageData = (key, value) => {
  try {
    const timeValue = JSON.stringify(value);
    localStorage.setItem(key, timeValue);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const getStorageData = key => {
  try {
    const timeValue = localStorage.getItem(key);
    return timeValue === null ? undefined : JSON.parse(timeValue);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

let currentTime = getStorageData('videoplayer-current-time') || [];

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  setStorageData('videoplayer-current-time', data.seconds);
}

player
  .setCurrentTime(currentTime)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
