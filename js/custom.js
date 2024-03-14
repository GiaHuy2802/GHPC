
$(".hamburger-menu").click(function () {
  $("aside").toggleClass("close");
});

$(".menu").click(function () {
  $(this).siblings(".menu").removeClass("active");
  $(this).addClass("active");

  $(this).next().siblings(".menu-dropdown").children(".sub-menu").slideUp();
  $(this).next(".menu-dropdown").children(".sub-menu").slideToggle();

  $(this)
    .next()
    .siblings(".menu-dropdown")
    .children(".sub-menu")
    .children(".menu")
    .removeClass("active");
});



document.getElementById('logout-link').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
  var confirmation = confirm("Bạn có muốn đăng xuất không?");

  if (confirmation) {
    // Thực hiện hành động đăng xuất tại đây, ví dụ chuyển hướng hoặc gửi yêu cầu đến máy chủ
    console.log("Đã đăng xuất"); // Đây là ví dụ, bạn có thể thay đổi theo nhu cầu của bạn
    window.location.href = "Login.html";
  } else {
    // Người dùng đã chọn "Cancel", không làm gì cả
    console.log("Không đăng xuất");
  }
});


window.onload = function() {
    var productListCheckbox = document.querySelector('.product.list input.select');
    var productCheckboxes = document.querySelectorAll('.product input.select');

    productListCheckbox.addEventListener('change', function() {
        for (var i = 0; i < productCheckboxes.length; i++) {
            productCheckboxes[i].checked = this.checked;
        }
    });

    // Kiểm tra xem tất cả các checkbox con đã được chọn hay không
    function areAllChecked() {
        for (var i = 0; i < productCheckboxes.length; i++) {
            if (!productCheckboxes[i].checked) {
                return false;
            }
        }
        return true;
    }

    // Cập nhật trạng thái của checkbox product list
    function updateProductListCheckbox() {
        productListCheckbox.checked = areAllChecked();
    }

    // Thêm sự kiện cho từng checkbox con
    for (var i = 0; i < productCheckboxes.length; i++) {
        productCheckboxes[i].addEventListener('change', function() {
            updateProductListCheckbox();
        });
    };

    var switchLabel = document.getElementById('switchLabel');
    var goPageLink = document.querySelector('.go_page');

    switchLabel.addEventListener('click', function() {
        if (document.getElementById('switch').checked) {
            goPageLink.href = './404error.html';
        } else {
            goPageLink.href = './laptop_ASUS.html';
        }
    });

    var deleteLinks = document.querySelectorAll('.delete');

    deleteLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

            var confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
            if (confirmation) {
                var product = this.closest('.product');
                product.remove();
            }
        });
    });
};
