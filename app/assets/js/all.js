$(document).ready(function() {

  // Global variables
  let windowWidth = $(window).width()


  /////////////// index.html starts ///////////////

  // .js-swiper-banner 
  // Initialize Swiper
  
  var swiperBanner = new Swiper('.js-swiper-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Search bar
  // Choose destination from dropdown

  $('.js-search-bar-destination').on( 'click', function(e){
    e.preventDefault();
    const destination = $(this).find('li:first-of-type').text();

    const searchBarDestination = `
    <span class="search-bar__content__subtitle">${destination}</span>
`
    // Show selected destinations

    $('.js-destinations-input').html(searchBarDestination);

    // Show title
    $(this).parent().siblings().find('.search-bar__content__title').show();
  });

  // Check-in / out 

  $('.js-search-bar-init-date').on('apply.daterangepicker', function(ev, picker) {

    // Show Check-in / out title
    $(this).siblings('.search-bar__content__title').show();

    // Adjust font-size
    $(this).css('font-size','14px');
  });


  // Guest count

  // Add guest 
  $('.js-guest-count-add').on( 'click', function(){
    let guestCount = parseInt($(this).siblings('.js-search-bar-guests-count').text());
    guestCount += 1;

    // Show count on dropdown
    $(this).siblings('.js-search-bar-guests-count').text(guestCount);

    return false;
  })

  // Remove guest 
  $('.js-guest-count-remove').on( 'click', function(){
    let guestCount = parseInt($(this).siblings('.js-search-bar-guests-count').text());
    
    if(guestCount > 0) {
        guestCount -= 1;
    }

    // Show count on dropdown
    $(this).siblings('.js-search-bar-guests-count').text(guestCount);

    return false;
  })

  // Show guests count 

  $('#js-dropdown-guests').on('hide.bs.dropdown', function () {
    
    const adultCount = parseInt($('.js-search-bar-guests-adult-count').text());
    const childCount = parseInt($('.js-search-bar-guests-child-count').text());
    const roomCount = parseInt($('.js-search-bar-guests-room-count').text());

    const searchBarGuests = `
    <span class="search-bar__content__subtitle font-xs">${adultCount} adult・${childCount} child・${roomCount} room</span>
  `
    // Show guests count number
    $('.js-guests-input').html(searchBarGuests);

    // Show guests title
    $(this).find('.search-bar__content__title').show();
  })


  // .js-swiper-top-choices 
  // Initialize Swiper

  var swiperTopChoices = new Swiper('.js-swiper-top-choices', {
    observer: true,
    observeParents: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next', 
      // prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },

      992 :{
        slidesPerView: 4,
      }
    }
  });


  // Date range picker 
  $(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD MMM') + ' - ' + picker.endDate.format('DD MMM'));
        // $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });

  // Popular Destinations dropdown menu 

  $('.js-popular-destinations-card').on( 'click', function(e){
    if(e.target.nodeName === 'A') {
      e.preventDefault();

      // Show menu
      $(this).siblings().toggle();
      
      // Hide other menus
      $(this).parents('.js-popular-destinations').siblings().find('.js-popular-destinations-menu').hide();
    }
  })

  // .js-swiper-get-inspiration 
  // Initialize Swiper

  var swiperGetInspiration = new Swiper('.js-swiper-get-inspiration', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', 
      // prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    }
  });

  /////////////// index.html ends ///////////////


  /////////////// hotel-list.html starts ///////////////

  var swiperHotelList = new Swiper('.js-swiper-hotel-list', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
    },
  });

  // Swiper
  // Show swiper buttons when hover

  $('.js-hotel-list-card').hover(
    function() {
      $(this).find('.js-hotel-list-card-arrow').css('opacity','100');
    }, function() {
      $(this).find('.js-hotel-list-card-arrow').css('opacity','0');
    }
  )

  // noUiSlider

  var slider = document.getElementById('slider');

  if(slider) {
    noUiSlider.create(slider, {
      start: [800, 4000],
      connect: true,
      range: {
          'min': 800,
          'max': 4000
      },
    })

    function showBudget() {
      const budgetMin = parseInt(slider.noUiSlider.get()[0]);
      const budgetMax = parseInt(slider.noUiSlider.get()[1]);
      $('.js-budget-min').text(budgetMin);
      $('.js-budget-max').text(budgetMax);  
    }
  
    showBudget();
  
  
    slider.noUiSlider.on('slide', function(){
        showBudget();
    })
  } 

  // Open filter in mobile version

  $('.js-filter-btn').on( 'click', function(){
    $('.js-filter').slideDown();
    $('.js-filter__result').slideDown();
  })

  $('.js-filter__btn--close').on( 'click', function(){
    $('.js-filter').slideUp();
    $('.js-filter__result').slideUp();
  })

  // Open sort in mobile version

  $('.js-sort-btn').on( 'click', function(){
    $('.js-sort').slideToggle();
    $('.js-sort-btn').toggleClass('sort-btn-active');
  })

  /////////////// hotel-list.html ends ///////////////


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
      prevEl: '.swiper-button-prev',
    },
  });

  // Toggle fullscreen swiper when clicking button 

  $('.js-hotel-info-img-link').on( 'click', function(){
    $('.js-swiper-hotel-info').fadeIn();
  });

  $('.js-swiper-hotel-info__btn--close').on( 'click', function(){
    $('.js-swiper-hotel-info').fadeOut();
  });


  // Remove all jQuery inline style when resizing to mobile 

  $(window).resize(function() {
    windowWidth = $(window).width();

    if (windowWidth <= 767) {
      $('.js-swiper-hotel-info').removeAttr('style');
      $('.js-swiper-hotel-info').removeClass('swiper-hotel-info__bg');
    
    } else {
      $('.js-swiper-hotel-info').addClass('swiper-hotel-info__bg');
    }
  })

  // Add / remove rooms 

  // Count total rooms
  let totalRoomCount = 0;

  // Add rooms  
  $('.js-room-type-count-remove').on( 'click', function(e){
    e.preventDefault();

    let roomCount = parseInt($(this).siblings('.js-room-type-count-result').text());

    // Open custom modal
    $('.js-hotel-info-modal').slideDown();

    if (roomCount === 0) {
      return;
    } 

    roomCount -= 1;

    // Show count result 
    $(this).siblings('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type').siblings('.js-room-type-bar').find('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type-bar').siblings('.js-room-type').find('.js-room-type-count-result').text(roomCount);

    // Update total room count
    totalRoomCount -= 1;
    updateHotelInfoModal();

  });

  // Remove rooms
  $('.js-room-type-count-add').on( 'click', function(e){
    e.preventDefault();

    let roomCount = parseInt($(this).siblings('.js-room-type-count-result').text());

    roomCount += 1;

    // Show count result
    $(this).siblings('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type').siblings('.js-room-type-bar').find('.js-room-type-count-result').text(roomCount);
    $(this).parents('.js-room-type-bar').siblings('.js-room-type').find('.js-room-type-count-result').text(roomCount);

    // Open custom modal
    $('.js-hotel-info-modal').slideDown();

    // Update total room count
    totalRoomCount += 1;
    updateHotelInfoModal();
  });

  // Update count 
  function updateHotelInfoModal(){
    $('.js-hotel-info-modal-count').text(totalRoomCount);
  };
  

  // Close custom modal
  $('.js-hotel-info-modal__btn--close').on( 'click', function(e){
    e.preventDefault();
    $('.js-hotel-info-modal').slideUp();
  })

  /////////////// hotel-info.html ends ///////////////


  /////////////// reservation-form.html starts ///////////////

  // Toggle booking details in mobile version
  $('.js-booking-details-btn').on( 'click',function(){
    $('.js-booking-details').slideToggle();

    // Rotate arrow 
    $('.js-booking-details-btn-close').toggleClass('active');
  })

  // Clear all jquery in tablet and desktop version

  $(window).resize(function() {
    windowWidth = $(window).width();

    if (windowWidth >= 768) {
      $('.js-booking-details').removeAttr('style');
      $('.js-booking-details-btn-close').removeClass('active');
    } 
  });

  /////////////// reservation-form.html ends ///////////////

});