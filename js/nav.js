document.addEventListener('DOMContentLoaded', function() {
    const menuLogo = document.querySelector('.menu_logo');
    const menuList = document.querySelector('.menu_list');
    const overlay = document.querySelector('.overlay');

    // Xử lý sự kiện khi click vào thẻ menu_logo
    menuLogo.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        menuList.classList.toggle('active'); // Thêm hoặc loại bỏ lớp active để hiển thị/ẩn menu
        overlay.style.display = menuList.classList.contains('active') ? 'block' : 'none'; // Hiển thị overlay khi menu active
    });

    // Xử lý sự kiện khi click vào overlay
    overlay.addEventListener('click', function() {
        menuList.classList.remove('active'); // Ẩn menu khi click vào overlay
        overlay.style.display = 'none'; // Ẩn overlay
    });
});