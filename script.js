// script.js

const passwordInput = document.getElementById("password-input");
const unlockBtn = document.getElementById("unlock-btn");
const lockMessage = document.getElementById("lock-message");
const countdown = document.getElementById("countdown");
const music = document.getElementById("bg-music");

let counter = 10;

// Đếm ngược
const countdownInterval = setInterval(() => {
  counter--;
  countdown.textContent = counter;
  if (counter <= 0) {
    clearInterval(countdownInterval);
    passwordInput.disabled = false;
    unlockBtn.disabled = false;
    countdown.style.display = "none";
  }
}, 1000);

// Xử lý mở khóa
unlockBtn.addEventListener("click", () => {
  const entered = passwordInput.value.trim();
  if (entered === "Milk10/6") {
    document.getElementById("lock-screen").style.display = "none";
    showFirstVideo();
    music.play();
  } else {
    lockMessage.textContent = "Sai mật khẩu rồi 😢";
  }
});

// Phát video đầu tiên
function showFirstVideo() {
  const video1 = document.createElement("video");
  video1.src = "milkdream.mp4";
  video1.autoplay = true;
  video1.muted = false;
  video1.className = "video";
  document.body.appendChild(video1);

  // Sau 10s, chuyển sang video thứ hai
  setTimeout(() => {
    video1.remove();
    showSecondVideo();
  }, 10000);
}

// Phát video thứ hai
function showSecondVideo() {
  const video2 = document.createElement("video");
  video2.src = "dreamy-video.mp4";
  video2.autoplay = true;
  video2.loop = true;
  video2.className = "video";
  document.body.appendChild(video2);

  // Gợi ý tiếp theo: hiển thị greeting, nút mở quà sau 5s
  setTimeout(() => {
    const greeting = document.createElement("div");
    greeting.className = "greeting-box";
    greeting.innerHTML = `
      <p>Chúc mừng sinh nhật 🎉</p>
      <p>Đây là món quà nhỏ gửi tặng bạn 💝</p>
    `;
    document.body.appendChild(greeting);

    const giftBtn = document.createElement("div");
    giftBtn.id = "gift-btn";
    giftBtn.innerHTML = `<button onclick="showGifts()">Mở quà 🎁</button>`;
    document.body.appendChild(giftBtn);
  }, 5000);
}

// Hiển thị các ảnh quà tặng
function showGifts() {
  document.getElementById("gift-btn").style.display = "none";
  const giftBox = document.createElement("div");
  giftBox.className = "gift-box";
  const images = [
    "gift-image.png",
    "gift-image1.jpeg",
    "gift-image2.jpeg",
    "gift-image3.webp",
    "gift-image4.webp"
  ];
  giftBox.innerHTML = images
    .map((src) => `<img src="${src}" alt="Quà">`)
    .join("");
  document.body.appendChild(giftBox);

  // Thêm lời chúc cuối cùng
  const finalMessage = document.createElement("div");
  finalMessage.id = "final-message";
  finalMessage.innerHTML = `
    <p>Cảm ơn bạn đã mở hết quà 🎁</p>
    <p>Hy vọng bạn sẽ có một ngày sinh nhật thật ấm áp và đáng nhớ 💕</p>
  `;
  document.body.appendChild(finalMessage);
}
