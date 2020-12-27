$(document).ready( function() {

  ////////// Index.html JS starts //////////

  // .swiper-banner 
  // Initialize Swiper
  var swiperBanner = new Swiper('.swiper-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // Search bar
  // Choose destination from dropdown
  $('.js-search-bar-init__item-destination').on( 'click', function(e){
    e.preventDefault();
    $('.js-search-bar-init__input-destination').val($(this).find('li:first-of-type').text());
  });

  // Guest count
  $('.js-search-bar-init__item-guests').on( 'click', function(e){
    return false;
  })


  // .swiper-top-choices 
  // Initialize Swiper

  var swiperTopChoices = new Swiper('.swiper-top-choices', {
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
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
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

  // .swiper-get-inspiration 
  // Initialize Swiper

  var swiperGetInspiration = new Swiper('.swiper-get-inspiration', {
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

  ////////// Index.html JS ends //////////

});
