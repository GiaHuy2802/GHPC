
// Lấy tất cả các phần tử có class "cart_item"
var cartItems = document.querySelectorAll('.cart_item');

// Duyệt qua từng phần tử và áp dụng đoạn mã JavaScript
cartItems.forEach(function (cartItem) {
  var quantityInput = cartItem.querySelector('.num input');
  var priceElement = cartItem.querySelector('.price_row .price');
  var totalElement = cartItem.querySelector('.total .total');

  // Kiểm tra xem các phần tử có tồn tại hay không trước khi thực hiện thao tác
  if (quantityInput && priceElement && totalElement) {
    var initialPrice = parseFloat(priceElement.innerText.replace(/[^0-9.-]+/g, ""));

    // Cập nhật giá trị khi số lượng thay đổi
    quantityInput.addEventListener('input', function () {
      updateTotal();
    });

    function updateTotal() {
      var quantity = parseInt(quantityInput.value);
      var total = initialPrice * quantity;

      // Hiển thị giá trị mới trong thẻ span.total
      totalElement.innerText = formatCurrency(total);
    }

    // Hàm định dạng số thành chuỗi tiền tệ
    function formatCurrency(amount) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }
  }
});
// Lấy tất cả các phần tử có class "price"
var priceElements = document.querySelectorAll('.price_row .price');

// Duyệt qua từng phần tử và áp dụng định dạng tiền tệ
priceElements.forEach(function (priceElement) {
var initialPrice = parseFloat(priceElement.innerText.replace(/[^0-9.-]+/g, ""));
priceElement.innerText = formatCurrency(initialPrice);
});

// Hàm định dạng số thành chuỗi tiền tệ
function formatCurrency(amount) {
return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}


document.addEventListener("DOMContentLoaded", function () {
// Lấy tất cả các phần tử có class "num"
var quantityInputs = document.querySelectorAll('.num input');

// Lấy tất cả các phần tử có class "total"
var totalElements = document.querySelectorAll('.total strong');

// Lấy phần tử có class "price_total"
var priceTotalElement = document.querySelector('.price_total');

// Cập nhật tổng thanh toán ban đầu
updateTotal();

// Thêm sự kiện lắng nghe cho mỗi input số lượng
quantityInputs.forEach(function (input) {
  input.addEventListener('input', function () {
    // Cập nhật giá trị của span.total tương ứng
    updateProductTotal(input);

    // Sau khi số lượng thay đổi, cập nhật lại tổng thanh toán
    updateTotal();
  });
});

// Hàm cập nhật giá trị của span.total tương ứng với input số lượng
function updateProductTotal(input) {
  var quantity = parseInt(input.value, 10);
  var priceElement = input.closest('.cart_item').querySelector('.price_row strong');
  var totalElement = input.closest('.cart_item').querySelector('.total strong');

  var price = parseInt(priceElement.textContent.replace(/\D/g, ''), 10);
  var total = price * quantity;

  // Cập nhật giá trị của span.total
  totalElement.textContent = formatCurrency(total);
}

// Hàm cập nhật tổng thanh toán
function updateTotal() {
  // Khởi tạo biến tổng
  var total = 0;

  // Lặp qua mỗi phần tử "total" để tính tổng
  totalElements.forEach(function (element) {
    var value = parseInt(element.textContent.replace(/\D/g, ''), 10);
    total += value;
  });

  // Hiển thị tổng vào phần tử "price_total"
  priceTotalElement.textContent = formatCurrency(total);
}

// Hàm định dạng số tiền thành chuỗi có dấu phẩy ngăn cách hàng nghìn
function formatCurrency(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
});