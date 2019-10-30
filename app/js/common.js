$(function() {


  $( "#selection input" ).on( "click", function() {
    $( "#input" ).val( $( ".answer-one:checked" ).val());
  });
  
  $("#one").click(function() {
    $('#base').text("Почта");
  });
  $("#two").click(function() {
    $('#base').text("Курьер");
  });


//---------------------------tabs-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.next a:first').addClass('active');
   $('.next a').click(function(event){
    event.preventDefault();
    $('.next a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

  // $( "#one input" ).on( "click", function() {
  //   $( "#one a" ).removeClass('disabled');
  // });
  // $( "#two input" ).on( "click", function() {
  //   $( "#two a" ).removeClass('disabled');
  // });
  // $( "#three input" ).on( "click", function() {
  //   $( "#three a" ).removeClass('disabled');
  // });
  // $( "#four input" ).on( "click", function() {
  //   $( "#four a" ).removeClass('disabled');
  // });
  // $( "#five input" ).on( "click", function() {
  //   $( "#five a" ).removeClass('disabled');
  // });
  // $( "#six input" ).on( "click", function() {
  //   $( "#six a" ).removeClass('disabled');
  // });
  // $( "#seven input" ).on( "click", function() {
  //   $( "#seven a" ).removeClass('disabled');
  // });
  // $( "#eight input" ).on( "click", function() {
  //   $( "#eight a" ).removeClass('disabled');
  // });


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

//--------------------------------------scroll------------------------------
  // $(window).resize(function(event) {
  //   var carousel = $("#carousel").waterwheelCarousel({
  //     flankingItems: 2,
  //     forcedImageWidth: 260,
  //     forcedImageHeight: 700,
  //     movingToCenter: function ($item) {
  //       $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
  //     },
  //     movedToCenter: function ($item) {
  //       $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
  //     },
  //     movingFromCenter: function ($item) {
  //       $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
  //     },
  //     movedFromCenter: function ($item) {
  //       $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
  //     },
  //     clickedCenter: function ($item) {
  //       $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
  //     }
  //   });

  //   $('#prev').bind('click', function () {
  //     carousel.prev();
  //     return false
  //   });

  //   $('#next').bind('click', function () {
  //     carousel.next();
  //     return false;
  //   });

  //   $('#reload').bind('click', function () {
  //     newOptions = eval("(" + $('#newoptions').val() + ")");
  //     carousel.reload(newOptions);
  //     return false;
  //   });
  // });


