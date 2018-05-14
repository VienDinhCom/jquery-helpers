(function ($) {
  function plugin(primary, secondary) {
    var self = this;

    function isFunction(obj) {
      return typeof obj === 'function';
    }

    function callPrimary() {
      if (isFunction(primary)) {
        primary.call(self);
      }
    }

    function callSecondary() {
      if (isFunction(secondary)) {
        secondary.call(self);
      }
    }

    $(document).mouseup(function (event) {
      if (
        !self.is(event.target)
        &&
        self.has(event.target).length === 0
      ) {
        callPrimary();
      } else {
        callSecondary();
      }
    });
  }

  $.fn.extend({ clickOutside: plugin });
})(jQuery);
