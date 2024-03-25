$(document).ready(function(){
  // Thẻ slide chính
  var sync1 = $("#sync1");
  sync1.owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop:true,
    responsive: {
      400: {
        autoplay:true,
      },
      0: {
        autoplay:true,
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
    autoplay:false,
    margin:10,
    loop:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      900: {
        items: 3,
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

  // Click event cho nút prev và next
  $('.owl-prev').click(function() {
    sync1.trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    sync1.trigger('next.owl.carousel');
  });
});