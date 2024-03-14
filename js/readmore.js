function toggleReadMore() {
    var content = document.querySelector('.desc_content .wrp');
    var btn = document.getElementById('readMoreBtn');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      btn.innerHTML = 'Read less';
    } else {
      content.style.maxHeight = 'none';
      btn.innerHTML = 'Read less';
      btn.style.display = 'none'; // Ẩn nút khi đã mở rộng nội dung
    }
  }