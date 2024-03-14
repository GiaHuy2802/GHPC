
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      var password = document.getElementById('password').value;
      var repassword = document.getElementById('repassword').value;
      var errorMessage = document.getElementById('error-message');

      if (password !== repassword) {
        errorMessage.textContent = 'Mật khẩu không khớp, vui lòng nhập lại!.';
        event.preventDefault(); // Ngăn chặn biểu mẫu được gửi đi nếu mật khẩu không khớp
        document.getElementById('password').value = '';
        document.getElementById('repassword').value = '';
      } else {
        repasswordError.textContent = '';
        // Hiển thị thông báo đăng ký thành công
        alert('Đăng ký thành công!');
      }
    });
