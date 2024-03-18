document.addEventListener('DOMContentLoaded', function() {
    const menuLogo = document.querySelector('.menu_logo');
    const mobileNav = document.querySelector('.mobile_nav');
    const overlay = document.querySelector('.overlay');

    // Xử lý sự kiện khi click vào thẻ menu_logo
    menuLogo.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        mobileNav.classList.toggle('active'); // Thêm hoặc loại bỏ lớp active để hiển thị/ẩn menu
        overlay.classList.toggle('active'); // Thêm hoặc loại bỏ lớp active để hiển thị/ẩn overlay
    });

    // Xử lý sự kiện khi click vào nền lớp mờ
    overlay.addEventListener('click', function(event) {
        mobileNav.classList.remove('active'); // Ẩn menu khi click vào nền lớp mờ
        overlay.classList.remove('active'); // Ẩn overlay khi click vào nền lớp mờ
    });
});
