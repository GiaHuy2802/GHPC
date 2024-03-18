document.addEventListener("DOMContentLoaded", function() {
    const headLink = document.querySelector('.head');
    const subMenu = document.querySelector('.sub_menu_product');

    headLink.addEventListener('click', function(e) {
        e.preventDefault();
        subMenu.classList.toggle('active');
    });
});
