 // Lấy các phần tử cần thiết
 var filter = document.getElementById('filter');
 var overlay = document.getElementById('overlay');
 var filterTrigger = document.getElementById('filterTrigger');
 
 // Xử lý sự kiện click vào nút Filter
 filterTrigger.addEventListener('click', function(event) {
   event.preventDefault(); // Ngăn chặn hành động mặc định của nút
 
   // Kiểm tra xem filter có lớp active không
   var isActive = filter.classList.contains('active');
 
   // Thêm hoặc xóa lớp active cho filter và overlay
   if (isActive) {
     filter.classList.remove('active');
     overlay.style.display = 'none';
   } else {
     filter.classList.add('active');
     overlay.style.display = 'block';
   }
 });
 
 // Xử lý sự kiện click vào overlay
 overlay.addEventListener('click', function() {
   filter.classList.remove('active');
   this.style.display = 'none';
 });