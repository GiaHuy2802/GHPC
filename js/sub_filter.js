document.addEventListener("DOMContentLoaded", function () {
    var filNameLinks = document.querySelectorAll(".fil_name");

    // Định nghĩa hàm xử lý sự kiện click
    function toggleSubMenu(event) {
      var subMenu = event.target.nextElementSibling;

      // Toggle class "active" để kích hoạt hoặc tắt hiệu ứng
      subMenu.classList.toggle("active");
    }

    // Thêm sự kiện click vào tất cả các thẻ <a> có class là fil_name
    filNameLinks.forEach(function (link) {
      link.addEventListener("click", toggleSubMenu);
    });
  });