$(document).ready(function(){
    // Thẻ slide chính
    var sync1 = $("#sync1");
    sync1.owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      loop:true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          nav: false,
        },
        600: {
          nav: false,
        },
        1000: {
          nav: true,
        }
      }
    });
  
    // Thẻ slide-for
    var sync2 = $("#sync2");
    sync2.owlCarousel({
      items: 4,
      dots: false,
      nav: false,
      stagePadding: 50,
      autoplay:true,
      margin:10,
      loop:true,
      responsive: {
        0: {
          items: 4,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 4,
        }
      }
    });
  
    // Kết nối thẻ slide chính và thẻ slide-for
    sync2.on('click', '.owl-item', function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.trigger('to.owl.carousel', [number, 300, true]);
    });
  
    // Tính năng nhấp vào slide-for để hiển thị tương ứng trên slide chính
    sync1.on('changed.owl.carousel', function (event) {
      if (!event.namespace || event.property.name === 'position') {
        var current = sync1.find(".owl-item.active").index();
        sync2.find('.owl-item').removeClass('active').eq(current).addClass('active');
      }
    });
  
    sync2.on('changed.owl.carousel', function (event) {
      if (!event.namespace || event.property.name === 'position') {
        var current = sync2.find(".owl-item.active").index();
        sync2.find('.owl-item').removeClass('active').eq(current).addClass('active');
      }
    });
});
