const countdownEl = document.getElementById('countdown');
const waitText = document.getElementById('wait-text');
const dayQuestion = document.getElementById('day-question');
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password');
const passwordMessage = document.getElementById('password-message');
const bgMusic = document.getElementById('bg-music');

const mainScreen = document.getElementById('main-screen');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const messagesContainer = document.getElementById('messages-container');
const giftButton = document.getElementById('gift-button');
const giftBox = document.getElementById('gift-box');

let countdown = 10;

const messages1 = [
  "🎉 Chúc mừng sinh nhật cậu!",
  "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ.",
  "🎁 Hãy nhấp vào đây để mở món quà tớ dành riêng cho cậu!"
];

const messages2 = [
  "🌈 Mong rằng những ước mơ của cậu đều thành hiện thực.",
  "💖 Tớ luôn chúc cậu thật nhiều niềm vui và yêu thương!"
];

// Countdown
const countdownInterval = setInterval(() => {
  countdownEl.textContent = countdown;
  if (countdown === 5) {
    dayQuestion.classList.remove("hidden");
  }
  if (countdown <= 0) {
    clearInterval(countdownInterval);
    waitText.classList.add("hidden");
    dayQuestion.classList.add("hidden");
    countdownEl.classList.add("hidden");
    passwordForm.classList.remove("hidden");
  }
  countdown--;
}, 1000);

// Password check
passwordForm.addEventListener('submit', e => {
  e.preventDefault();
  if (passwordInput.value === "Milk10/6") {
    passwordMessage.textContent = "🌟 Hôm nay là ngày gì nào? Chuẩn rồi!";
    setTimeout(() => {
      document.getElementById("entry-screen").classList.add("hidden");
      mainScreen.classList.remove("hidden");
      startMain();
    }, 3000);
  } else {
    passwordMessage.textContent = "❌ Sai mật khẩu rồi 🥺";
  }
});

function startMain() {
  bgMusic.play();
  video1.play();

  // Show first 3 messages (7s total)
  let idx = 0;
  const msgInterval = setInterval(() => {
    if (idx < messages1.length) {
      messagesContainer.textContent = messages1[idx++];
    } else {
      clearInterval(msgInterval);
    }
  }, 2500);

  setTimeout(() => {
    video1.classList.add("hidden");
    video2.classList.remove("hidden");
    video2.play();

    // Show 2 messages in dreamy video
    let idx2 = 0;
    const msg2Interval = setInterval(() => {
      if (idx2 < messages2.length) {
        messagesContainer.textContent = messages2[idx2++];
      } else {
        clearInterval(msg2Interval);
        giftButton.classList.remove("hidden");
      }
    }, 3000);
  }, 10000);
}

// Show gift
giftButton.addEventListener("click", () => {
  giftBox.classList.toggle("hidden");
});
