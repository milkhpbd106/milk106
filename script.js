const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const countdownMessage = document.getElementById("countdown-message");
const countdownTimer = document.getElementById("countdown-timer");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const videoSection = document.getElementById("video-section");
const messagesContainer = document.getElementById("messages");
const giftButton = document.getElementById("gift-btn");
const giftGallery = document.getElementById("gift-gallery");
const bgMusic = document.getElementById("bg-music");
const feedback = document.getElementById("feedback");

let countdown = 10;

const firstMessages = [
  "🌈 Chúc mừng sinh nhật cậu 💖",
  "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
];

const secondMessages = [
  "🌸 Happy Birthday Milk 💖",
  "🌈 Let’s step into a dreamy world together ✨",
  "🌼 Mong mọi điều dịu dàng nhất luôn ở bên cậu 💕",
  "💫 Hy vọng cậu sẽ luôn cảm thấy được yêu thương và mơ mộng mãi mãi 🍃"
];

function startCountdown() {
  const interval = setInterval(() => {
    countdown--;
    countdownTimer.textContent = countdown;

    if (countdown > 5) {
      countdownMessage.textContent = "⏳ Kiên nhẫn một chút nhé tôi có chút chậm 😅";
    } else if (countdown > 0) {
      countdownMessage.textContent = "🎈 Hôm nay là ngày gì nào?";
    } else {
      clearInterval(interval);
      countdownMessage.textContent = "";
      countdownTimer.textContent = "";
      passwordForm.classList.remove("hidden");
    }
  }, 1000);
}

startCountdown();

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const entered = passwordInput.value.trim();
  if (entered === "Milk10/6") {
    document.getElementById("password-container").classList.add("hidden");
    videoSection.classList.remove("hidden");
    video1.play();
    bgMusic.play();

    showFirstMessages();

    setTimeout(() => {
      video1.classList.add("hidden");
      video2.classList.remove("hidden");
      showSecondMessages();
    }, 10000); // chuyển sau 10s
  } else {
    errorMessage.textContent = "❌ Sai mật khẩu rồi 😢";
  }
});

function showFirstMessages() {
  let i = 0;
  const interval = setInterval(() => {
    if (i < firstMessages.length) {
      messagesContainer.textContent = firstMessages[i++];
   
