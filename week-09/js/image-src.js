/* cribbed from http://cloudfour.com/examples/img-currentsrc/ */
(function() {
  var currentSrc, oldSrc, imgEl;
  var showPicSrc = function() {
    oldSrc     = currentSrc;
    imgEl      = document.getElementById('hank-and-fanny');
    currentSrc = imgEl.currentSrc || imgEl.src;

    if (typeof oldSrc === 'undefined' || oldSrc !== currentSrc) {
      console.log('Now showing ' + currentSrc.split('images/')[1]);
    }
  };

  // You may wish to debounce resize if you have performance concerns
  window.addEventListener('resize', showPicSrc);
  window.addEventListener('load', showPicSrc);
})(window);
