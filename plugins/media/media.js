(function ($) {
  if (!window.matchMedia) {
    console.error('jQuery().media() needs \'https://github.com/paulirish/matchMedia.js/\' to run on old browsers.'); // eslint-disable-line
  }

  function plugin(media, primary, secondary, listening) {
    var self = this;
    var mql = window.matchMedia(media);
    var matches = mql.matches;

    function isFunction(obj) {
      return typeof obj === 'function';
    }

    function callPrimary() {
      if (isFunction(primary)) {
        primary.call(self, matches);
      }
    }

    function callSecondary() {
      if (isFunction(secondary)) {
        secondary.call(self, matches);
      }
    }

    function handler() {
      if (!isFunction(secondary)) return callPrimary();
      return (matches) ? callPrimary() : callSecondary();
    }

    handler();

    if ((listening !== false) && isFunction(primary)) {
      mql.addListener(function () {
        matches = mql.matches;
        handler();
      });
    }

    return matches;
  }

  $.fn.extend({ media: plugin, mq: plugin });
})(jQuery);
