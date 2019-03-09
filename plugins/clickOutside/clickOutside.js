(function ($) {

  $.fn.clickOutside = function(yes, no) {
    this.each(function() {
      var self = this;

      $(document).mouseup(function (event) {
        var condition = !self.is(event.target) && self.has(event.target).length === 0;

        if (condition && $.isFunction(yes)) return yes.call(null, self);
        if ($.isFunction(no)) yes.call(null, self);
      });

    });
  };

})(jQuery);
