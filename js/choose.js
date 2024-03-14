$(document).ready(function () {
    $(".choose_option").click(function () {
      // Xóa lớp "active" từ tất cả các phần tử .choose_option
      $(".choose_option").removeClass("active");

      // Thêm lớp "active" cho phần tử được nhấp
      $(this).addClass("active");
    });
  });