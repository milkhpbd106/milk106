// script.js

const correctPassword = "Milk10/6";
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");
const countdownEl = document.getElementById("countdown");
const passwordSection = document.getElementById("password-section");
const mainContent = document.getElementById("main-content");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const bgMusic = document.getElementById("bg-music");
const greetings = document.getElementById("greetings");
const afterGreeting = document.getElementById("after-greetings");
const giftBtn = document.getElementById("gift-btn");
const giftBox = document.getElementById("gift-box");
const closeGift = document.getElementById("close-gift");
const feedbackSection = document.getElementById("feedback-section");

let countdownTime = 10;

function showCountdown() {
  countdownEl.textContent = countdownTime;
  const interval = setInterval(() => {
    countdownTime--;
    countdownEl.textContent = countdownTime;
    if (countdownTime <= 0) {
      clearInterval(interval);
      document.getElementById("password-form").style.display = "block";
      countdownEl.style.display = "none";
    }
  }, 1000);
}

function showError(msg) {
  messageBox.innerHTML = `${msg} <span>❌</span>`;
  messageBox.classList.add("error");
}

function showSuccess(msg) {
  messageBox.innerHTML = `${msg} <span>🌸</span>`;
  messageBox.classList.add("success");
}

function checkPassword() {
  const input = passwordInput.value;
  if (input !== correctPassword) {
    showError("Sai mật khẩu rồi");
    return;
  }

  showSuccess("Hôm nay là ngày gì nào?");
  passwordInput.disabled = true;
  submitBtn.disabled = true;

  setTimeout(() => {
    passwordSection.style.display = "none";
    startMainPage();
  }, 10000);
}

function startMainPage() {
  mainContent.style.display = "block";
  bgMusic.play();
  video1.play();

  const lines = greetings.querySelectorAll(".line");
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("show");
    }, index * 2500);
  });

  setTimeout(() => {
    greetings.classList.add("fade-out");
    setTimeout(() => {
      video1.pause();
      video1.style.display = "none";
      video2.style.display = "block";
      video2.play();
      afterGreeting.classList.add("show");
    }, 3000);
  }, 10000);
}

submitBtn.addEventListener("click", checkPassword);

giftBtn.addEventListener("click", () => {
  giftBox.style.display = "flex";
});

closeGift.addEventListener("click", () => {
  giftBox.style.display = "none";
});

window.addEventListener("load", () => {
  showCountdown();
});
