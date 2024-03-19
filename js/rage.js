  // your-script.js

  document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ input min-price và max-price
    var minPriceInput = document.getElementById("min-price");
    var maxPriceInput = document.getElementById("max-price");

    // Lấy thẻ div chứa thanh trượt
    var slider = document.getElementById("price-range-slider");

    // Khởi tạo thanh trượt
    noUiSlider.create(slider, {
      start: [200, 800], // Khoảng giá ban đầu
      connect: true, // Kết nối hai nút trượt
      range: {
        min: 0, // Giá tối thiểu
        max: 1000, // Giá tối đa
      },
    });

    // Lắng nghe sự kiện khi giá trị của thanh trượt thay đổi
    slider.noUiSlider.on("update", function (values, handle) {
      // Cập nhật giá trị vào hai ô input
      if (handle === 0) {
        minPriceInput.value = values[handle];
      } else {
        maxPriceInput.value = values[handle];
      }
    });

    // Lắng nghe sự kiện khi người dùng nhập giá trị vào ô input min-price
    minPriceInput.addEventListener("change", function () {
      slider.noUiSlider.set([this.value, null]);
    });

    // Lắng nghe sự kiện khi người dùng nhập giá trị vào ô input max-price
    maxPriceInput.addEventListener("change", function () {
      slider.noUiSlider.set([null, this.value]);
    });
  });