$(function() {

//------------------------------hamburger-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('.header').toggleClass('header--active');
  });

//------------------------------slider-----------------------------
  var swiper = new Swiper('.hero__slider', {
    effect: 'fade',
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 20}, 'slow', 'swing');
  });

//-------------------------------активна ссилка на якій знаходишся для меню-login__nav--------------------------------------
  $('.login__nav a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('active');
      }
  });
//-------------------------------активна ссилка на якій знаходишся для меню---------------------------------------
  $('.login__edit a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('active');
      }
  });
  
});
