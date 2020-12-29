"use strict";

$(document).ready(function () {
  // .swiper-banner 
  // Initialize Swiper
  var swiperBanner = new Swiper('.swiper-banner', {
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

  $('#js-search-bar-init-date').on('apply.daterangepicker', function (ev, picker) {
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
  }); // .swiper-top-choices 
  // Initialize Swiper

  var swiperTopChoices = new Swiper('.swiper-top-choices', {
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
  }); // .swiper-get-inspiration 
  // Initialize Swiper

  var swiperGetInspiration = new Swiper('.swiper-get-inspiration', {
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
  }); /////////////// hotel-list starts ///////////////

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
    $(this).find('.hotel-list-card-arrow').css('display', 'flex');
  }, function () {
    $(this).find('.hotel-list-card-arrow').css('display', 'none');
  }); // noUiSlider

  var slider = document.getElementById('slider'); // console.log(slider)

  noUiSlider.create(slider, {
    start: [800, 4000],
    connect: true,
    range: {
      'min': 800,
      'max': 4000
    }
  });

  function showBudget() {
    var budgetMin = parseInt(slider.noUiSlider.get()[0]);
    var budgetMax = parseInt(slider.noUiSlider.get()[1]);
    $('.js-budget-min').text(budgetMin);
    $('.js-budget-max').text(budgetMax);
  }

  showBudget();
  slider.noUiSlider.on('slide', function () {
    showBudget();
  }); // Open filter in mobile version
  // $('.js-filter-btn').on( 'click', function() {
  //   $('.js-filter').slideToggle();
  // })

  $('.js-filter-btn').click(function () {
    $('.js-filter').slideToggle();
  });
}); /////////////// hotel-list ends ///////////////
//# sourceMappingURL=all.js.map
