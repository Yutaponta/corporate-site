//hamburger
//========================//
$(function(){
  $('.js-hamburger').on( 'click', function() {
      $(this).toggleClass('-active');
      $('.g-nav').toggleClass('-active');
  });
});


// wow Animation
//========================//
$(function(){
  new WOW().init();
});

/* contact */
(function(){
  $('html').addClass('js');

  var contactForm = {
    container: $('#contact-form'),
    config: {
      effect: 'slideToggle',
      speed: 150
    },

    init: function(config){
      $.extend(this.config, config);

      $('#c-btn').on('click', this.show);
    },

    show: function(){
      var cf = contactForm,
          container = cf.container,
          config = cf.config;


      if(container.is(':hidden')){
        cf.close.call(container);
        container[config.effect]
        (config.speed);
      }
    },

    close: function(){
      var $this = $('#contact-form');

      if($this.find('span.close').length) return;

      $('<span class=close>-</span>')
        .prependTo(this)
        .on('click', function(){
        $this[contactForm.config.effect](contactForm.config.speed);
      })
    }
  };

contactForm.init({
  effect: 'fadeToggle',
  speed: 150
});
})();

/* portfolio modal */
$(function() {
  $('.single').colorbox({
    maxWidth: '90%',
    maxHeight: '90%',
    opacity: 0.7
  })
});

$(document).ready(function(){
  $('.iframe').colorbox({
    iframe:true,
    width:'90%',
    height:'90%'
  });
});

$(function() {
  $(".gallery").colorbox({
    rel:'slideshow',
    slideshow:true,
    slideshowSpeed:7500,
    maxWidth:"90%",
    maxHeight:"90%",
    opacity: 0.7
  });
});
