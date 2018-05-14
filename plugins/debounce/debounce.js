(function ($) {
  function plugin(primary, milliseconds) {
    clearTimeout(timeoutID); // eslint-disable-line

    function isFunction(obj) {
      return typeof obj === 'function';
    }

    function callPrimary() {
      if (isFunction(primary)) {
        primary.call();
      }
    }

    var timeoutID = setTimeout(function () { // eslint-disable-line
      callPrimary();
    }, milliseconds || 30);
  }

  $.fn.extend({ debounce: plugin });
})(jQuery);
