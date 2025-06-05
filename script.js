const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("password-message");
const countdownEl = document.getElementById("countdown");
const countText = document.getElementById("count-text");

const entryScreen = document.getElementById("entry-screen");
const mainScreen = document.getElementById("main-screen");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const messagesContainer = document.getElementById("messages-container");

const giftButton = document.getElementById("gift-button");
const giftBox = document.getElementById("gift-box");

const prevVideo = document.getElementById("prev-video");
const nextVideo = document.getElementById("next-video");

const bgMusic = document.getElementById("bg-music");
const feedbackBox = document.getElementById("feedback-box");

let currentVideo = 1;

// Đếm ngược khi vào trang
let count = 10;
const countdownInterval = setInterval(() => {
  countdownEl.textContent = count;
  if (count === 5) {
    countText.textContent = "🌤️ Hôm nay là ngày gì nào?";
  }
  if (count === 0) {
    clearInterval(countdownInterval);
    passwordForm.classList.remove("hidden");
    countdownEl.style.display = "none";
    countText.style.display = "none";
  }
  count--;
}, 1000);

// Xác minh mật khẩu
passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = passwordInput.value.trim();
  if (input === "Milk10/6") {
    entryScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
    startSequence();
  } else {
    passwordMessage.textContent = "❌ Sai mật khẩu rồi 😢";
  }
});

// Trình tự phát video + chúc mừng
function startSequence() {
  bgMusic.play();
  video1.play();

  const messages = [
    "🎂 Chúc mừng sinh nhật cậu!",
    "🌟 Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ.",
    "🎁 Hãy nhấp vào đây để mở món quà tớ dành riêng cho cậu"
  ];

  let idx = 0;
  const msgInterval = setInterval(() => {
    if (idx < messages.length) {
      messagesContainer.textContent = messages[idx++];
    } else {
      clearInterval(msgInterval);
    }
  }, 2300);

  // Sau 10s video1, chuyển sang video2
  setTimeout(() => {
    fadeOut(video1);
    setTimeout(() => {
      video1.classList.add("hidden");
      video2.classList.remove("hidden");
      video2.play();
      messagesContainer.textContent = "";
      showMessages2();
    }, 3000);
  }, 10000);
}

// Hiển thị câu chúc trong video 2
function showMessages2() {
  const messages2 = [
    "🫧 Mong mọi điều tốt đẹp sẽ đến với cậu.",
    "💫 Cậu xứng đáng được hạnh phúc và mơ mộng thật nhiều!"
  ];

  let idx2 = 0;
  const msg2Interval = setInterval(() => {
    if (idx2 < messages2.length) {
      messagesContainer.textContent = messages2[idx2++];
    } else {
      clearInterval(msg2Interval);
      giftButton.classList.remove("hidden");
      prevVideo.classList.remove("hidden");
      nextVideo.classList.remove("hidden");
    }
  }, 3000);
}

// Mở quà
giftButton.addEventListener("click", () => {
  giftBox.classList.toggle("hidden");
  setTimeout(() => {
    feedbackBox.classList.remove("hidden");
  }, 7000);
});

// Chuyển video
nextVideo.addEventListener("click", () => {
  video1.classList.add("hidden");
  video2.classList.remove("hidden");
  video2.play();
  currentVideo = 2;
});

prevVideo.addEventListener("click", () => {
  video2.classList.add("hidden");
  video1.classList.remove("hidden");
  video1.play();
  currentVideo = 1;
});

// Hiệu ứng click lấp lánh
document.addEventListener("click", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.getElementById("sparkle-container").appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// Gửi phản hồi
document.getElementById("send-feedback").addEventListener("click", () => {
  const from = document.getElementById("from-who").value;
  const text = document.getElementById("feedback-text").value.trim();
  if (text) {
    alert(`📩 Gửi thành công từ ${from}:\n${text}`);
    // Nếu muốn lưu vĩnh viễn, cần dùng Firebase hoặc cơ sở dữ liệu
  }
});

// Hiệu ứng mờ video
function fadeOut(video) {
  let opacity = 1;
  const fade = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fade);
    } else {
      opacity -= 0.05;
      video.style.opacity = opacity;
    }
  }, 100);
}
