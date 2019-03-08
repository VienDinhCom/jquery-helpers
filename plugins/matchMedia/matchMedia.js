(function ($) {

  $.fn.matchMedia = function(mqs, yes, no) {
    if (!window.matchMedia) return console.error('jQuery().matchMedia() needs \'https://github.com/paulirish/matchMedia.js/\' to run on old browsers.'); // eslint-disable-line

    var mql = window.matchMedia(mqs);
    var matches = mql.matches;

    function handler(event) {
      if ($.isFunction(yes) && !$.isFunction(no)) {
        return yes.call(null, event.matches);
      }

      if (event.matches) {
        if ($.isFunction(yes)) yes.call();
      } else {
        if ($.isFunction(no)) no.call();
      }
    }

    handler(mql);
    mql.addListener(handler);

    return matches;
  };

})(jQuery);
