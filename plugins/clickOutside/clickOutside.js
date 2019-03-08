(function ($) {

  $.fn.clickOutside = function(yes, no) {
    var self = this;

    $(document).mouseup(function (event) {
      var condition = !self.is(event.target) && self.has(event.target).length === 0;

      if (condition && $.isFunction(yes)) return yes.call();
      if ($.isFunction(no)) no.call();
    });
  };

})(jQuery);
