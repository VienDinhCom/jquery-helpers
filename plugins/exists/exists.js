(function ($) {

  $.fn.exists = function(yes, no) {
    var length = this.length;

    if (length === 0) return $.isFunction(no) ? no.call() : null;

    return this.each(function() {
      return $.isFunction(yes) ? yes.call(null, this, length) : null;
    });
  };

})(jQuery);
