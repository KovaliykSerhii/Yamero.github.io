/*!
 * headroom v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams 
 * License: MIT
 */


(function ($) {

  if (!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('headroom'),
        options = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if (option === 'destroy') {
          $this.removeData('headroom');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function () {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));