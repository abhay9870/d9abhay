(($, Drupal) => {
  "use strict";
  Drupal.behaviors.Slider = {
    attach() {
      var selector = ".field--name-field-slider-image";
      $(selector).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        autoplay: false,
      });
    },
  };
})(jQuery, Drupal);
