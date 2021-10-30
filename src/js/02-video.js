     import Player from '@vimeo/player';
     
     import throttle from 'lodash.throttle'

    const iframeEl = document.querySelector('#vimeo-player');
    const player = new Player(iframeEl);
    const KEY = "videoplayer-current-time"
    
   player.on('timeupdate', throttle(currentTimeSeconds, 1000));
   
  function currentTimeSeconds() {
    player.getCurrentTime()
        .then(function (seconds) {
            localStorage.setItem(KEY, seconds)
        }).catch(function (error) {
            console.log("an error occurred", error)
        });
}


player.setCurrentTime(localStorage.getItem(KEY))
  .catch(function(error) {
   console.log('RangeError', error)
});


