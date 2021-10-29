     import Player from '@vimeo/player';
     
     import throttle from 'lodash.throttle'

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
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


