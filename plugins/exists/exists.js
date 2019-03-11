(function ($) {

  $.fn.exists = function(yes, no) {
    var length = this.length;

    if (length === 0 && $.isFunction(no)) no.call();

    this.each(function() {
      if ($.isFunction(yes)) yes.call(this, length);
    });

    return length;
  };

})(jQuery);
