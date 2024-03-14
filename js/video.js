var video = document.getElementById("video");

// Thêm nút để tắt tự động phát
var button = document.createElement("button");
button.textContent = "Tắt tự động phát";
button.addEventListener("click", function() {
  video.autoplay = false;
});

document.body.appendChild(button);