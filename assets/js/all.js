"use strict";

$(document).ready(function () {
  /////////////// index.html starts ///////////////
  // .js-swiper-banner 
  // Initialize Swiper
  var swiperBanner = new Swiper('.js-swiper-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // Search bar
  // Choose destination from dropdown

  $('.js-search-bar-destination').on('click', function (e) {
    e.preventDefault();
    var destination = $(this).find('li:first-of-type').text();
    var searchBarDestination = "\n    <span class=\"search-bar__content__subtitle\">".concat(destination, "</span>\n"); // Show selected destinations

    $('.js-destinations-input').html(searchBarDestination); // Show title

    $(this).parent().siblings().find('.search-bar__content__title').show();
  }); // Check-in / out 

  $('.js-search-bar-init-date').on('apply.daterangepicker', function (ev, picker) {
    // Show Check-in / out title
    $(this).siblings('.search-bar__content__title').show(); // Adjust font-size

    $(this).css('font-size', '14px');
  }); // Guest count

  $('.js-search-bar-guests').on('click', function (e) {
    var count = parseInt($(this).find('.js-search-bar-guests-count').text());

    if (e.target.innerHTML === 'remove' && count > 0) {
      count -= 1;
    } else if (e.target.innerHTML === 'add') {
      count += 1;
    } // Show count on dropdown


    $(this).find('.js-search-bar-guests-count').text(count);
    return false;
  }); // Show guests count 

  $('#js-dropdown-guests').on('hide.bs.dropdown', function () {
    var adultCount = parseInt($('.js-search-bar-guests-adult-count').text());
    var childCount = parseInt($('.js-search-bar-guests-child-count').text());
    var roomCount = parseInt($('.js-search-bar-guests-room-count').text());
    var searchBarGuests = "\n    <span class=\"search-bar__content__subtitle font-xs\">".concat(adultCount, " adult\u30FB").concat(childCount, " child\u30FB").concat(roomCount, " room</span>\n  "); // Show guests count number

    $('.js-guests-input').html(searchBarGuests); // Show guests title

    $(this).find('.search-bar__content__title').show();
  }); // .js-swiper-top-choices 
  // Initialize Swiper

  var swiperTopChoices = new Swiper('.js-swiper-top-choices', {
    observer: true,
    observeParents: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next' // prevEl: '.swiper-button-prev',

    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  }); // Date range picker 

  $(function () {
    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    });
    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('DD MMM') + ' - ' + picker.endDate.format('DD MMM')); // $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });
  }); // Popular Destinations dropdown menu 

  $('.js-popular-destinations-card').on('click', function (e) {
    if (e.target.nodeName === 'A') {
      e.preventDefault(); // Show menu

      $(this).siblings().toggle(); // Hide other menus

      $(this).parents('.js-popular-destinations').siblings().find('.js-popular-destinations-menu').hide();
    }
  }); // .js-swiper-get-inspiration 
  // Initialize Swiper

  var swiperGetInspiration = new Swiper('.js-swiper-get-inspiration', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next' // prevEl: '.swiper-button-prev',

    },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  }); /////////////// index.html ends ///////////////
  /////////////// hotel-list.html starts ///////////////

  var swiperHotelList = new Swiper('.js-swiper-hotel-list', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // Swiper
  // Show swiper buttons when hover

  $('.js-hotel-list-card').hover(function () {
    $(this).find('.js-hotel-list-card-arrow').css('opacity', '100');
  }, function () {
    $(this).find('.js-hotel-list-card-arrow').css('opacity', '0');
  }); // noUiSlider

  var slider = document.getElementById('slider'); // If no noUiSlider is used in the page, stop running the code below
  // if (!slider) {
  //   return ;
  // }

  if (slider) {
    var showBudget = function showBudget() {
      var budgetMin = parseInt(slider.noUiSlider.get()[0]);
      var budgetMax = parseInt(slider.noUiSlider.get()[1]);
      $('.js-budget-min').text(budgetMin);
      $('.js-budget-max').text(budgetMax);
    };

    noUiSlider.create(slider, {
      start: [800, 4000],
      connect: true,
      range: {
        'min': 800,
        'max': 4000
      }
    });
    showBudget();
    slider.noUiSlider.on('slide', function () {
      showBudget();
    });
  } // noUiSlider.create(slider, {
  //     start: [800, 4000],
  //     connect: true,
  //     range: {
  //         'min': 800,
  //         'max': 4000
  //     },
  // });
  // function showBudget() {
  //   const budgetMin = parseInt(slider.noUiSlider.get()[0]);
  //   const budgetMax = parseInt(slider.noUiSlider.get()[1]);
  //   $('.js-budget-min').text(budgetMin);
  //   $('.js-budget-max').text(budgetMax);  
  // }
  // showBudget();
  // slider.noUiSlider.on('slide', function(){
  //     showBudget();
  // })
  // Open filter in mobile version


  $('.js-filter-btn').on('click', function () {
    $('.js-filter').slideDown();
    $('.js-filter__result').slideDown();
  });
  $('.js-filter__btn--close').on('click', function () {
    $('.js-filter').slideUp();
    $('.js-filter__result').slideUp();
  }); // Open sort in mobile version

  $('.js-sort-btn').on('click', function () {
    $('.js-sort').slideToggle();
    $('.js-sort-btn').toggleClass('sort-btn-active');
  }); /////////////// hotel-list.html ends ///////////////
  /////////////// hotel-info.html starts ///////////////
  // .js-swiper-banner 
  // Initialize Swiper

  var swiperHotelInfo = new Swiper('.js-swiper-hotel-info', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // Toggle fullscreen swiper when clicking button 

  $('.js-hotel-info-img-link').on('click', function () {
    $('.js-swiper-hotel-info').fadeIn();
  });
  $('.js-swiper-hotel-info__btn--close').on('click', function () {
    $('.js-swiper-hotel-info').fadeOut();
  }); // Remove all jQuery inline style when resizing to mobile 

  var windowWidth = $(window).width();
  $(window).resize(function () {
    windowWidth = $(window).width();

    if (windowWidth <= 767) {
      $('.js-swiper-hotel-info').removeAttr('style');
      $('.js-swiper-hotel-info').removeClass('swiper-hotel-info__bg');
    } else {
      $('.js-swiper-hotel-info').addClass('swiper-hotel-info__bg');
    }
  }); // Add / remove rooms 
  // Count total rooms

  var totalRoomCount = 0; // Add rooms  

  $('.js-room-type-count-remove').on('click', function (e) {
    e.preventDefault(); // console.log($(this).parents('.js-room-type'));

    var roomCount = parseInt($(this).siblings('.js-room-type-count-result').text()); // Open custom modal

    $('.js-hotel-info-modal').slideDown();

    if (roomCount === 0) {
      return;
    }

    roomCount -= 1; // Show count result 

    $(this).siblings('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type').siblings('.js-room-type-bar').find('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type-bar').siblings('.js-room-type').find('.js-room-type-count-result').text(roomCount); // Update total room count

    totalRoomCount -= 1;
    updateHotelInfoModal();
  }); // Remove rooms

  $('.js-room-type-count-add').on('click', function (e) {
    e.preventDefault();
    var roomCount = parseInt($(this).siblings('.js-room-type-count-result').text());
    roomCount += 1; // Show count result

    $(this).siblings('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type').siblings('.js-room-type-bar').find('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type-bar').siblings('.js-room-type').find('.js-room-type-count-result').text(roomCount); // Open custom modal

    $('.js-hotel-info-modal').slideDown(); // Update total room count

    totalRoomCount += 1;
    updateHotelInfoModal();
  }); // Update count 

  function updateHotelInfoModal() {
    $('.js-hotel-info-modal-count').text(totalRoomCount);
  }

  ; // Close custom modal

  $('.js-hotel-info-modal__btn--close').on('click', function (e) {
    e.preventDefault();
    $('.js-hotel-info-modal').slideUp();
  }); /////////////// hotel-info.html ends ///////////////
});
//# sourceMappingURL=all.js.map
