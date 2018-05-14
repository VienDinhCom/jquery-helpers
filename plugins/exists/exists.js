(function ($) {
  function plugin(primary, secondary) {
    var self = this;
    var exists = self.length;

    function isFunction(obj) {
      return typeof obj === 'function';
    }

    function callPrimary() {
      if (isFunction(primary)) {
        primary.call(self, $);
      }
    }

    function callSecondary() {
      if (isFunction(secondary)) {
        secondary.call(self, $);
      }
    }

    function handler() {
      return (exists) ? callPrimary() : callSecondary();
    }

    handler();

    return exists;
  }

  $.fn.extend({ exists: plugin });
})(jQuery);
