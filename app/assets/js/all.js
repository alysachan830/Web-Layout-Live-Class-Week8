// .swiper-banner in index.html
// Initialize Swiper
var swiperBanner = new Swiper('.swiper-banner', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// .swiper-top-choices in index.html
// Initialize Swiper
var swiperTopChoices = new Swiper('.swiper-top-choices', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// jQuery
$(document).ready( () => {
  // Date range picker in index.html
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
})