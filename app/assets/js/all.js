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

  $('.js-search-bar-destination').on( 'click', function(e){
    e.preventDefault();
    const destination = $(this).find('li:first-of-type').text();

    const destinationStr = `
    <div class="search-bar__content d-flex align-items-center">
      <span class="material-icons mr-6">location_on</span>
      <div>
        <span class="search-bar__content__title">destination</span>
        <span class="search-bar__content__subtitle">${destination}</span>
      </div>
    </div> 
    `

    // Show selected destinations
    $('.js-destinations-input').html(destinationStr);
  });

  // Guest count

  $('.js-search-bar-guests').on( 'click', function(e){

    let count = parseInt($(this).find('.js-search-bar-guests-count').text());

    if (e.target.innerHTML === 'remove' && count > 0) {
      count -= 1;
    }
    else if (e.target.innerHTML === 'add') {
      count += 1;
    }
    // Show count on dropdown
    $(this).find('.js-search-bar-guests-count').text(count)

    return false;
  });

  // Show guests count 

  $('#js-dropdown-guests').on('hide.bs.dropdown', function () {
    
    const adultCount = parseInt($('.js-search-bar-guests-adult-count').text());
    const childCount = parseInt($('.js-search-bar-guests-child-count').text());
    const roomCount = parseInt($('.js-search-bar-guests-room-count').text());

    const guestsStr = `
    <div class="search-bar__content d-flex align-items-center">
      <span class="material-icons mr-6">person</span>
      <div>
        <span class="search-bar__content__title">guest</span>
        <span class="search-bar__content__subtitle">${adultCount} adult・${childCount} child・${roomCount} room</span>
      </div>
    </div> 
    `

    $('.js-guests-input').html(guestsStr);

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
