const correctPassword = "Milk10/6";
const countdownEl = document.getElementById("countdown");
const passwordInput = document.getElementById("password-input");
const unlockBtn = document.getElementById("unlock-btn");
const lockMessage = document.getElementById("lock-message");
const lockScreen = document.getElementById("lock-screen");
const mainContent = document.getElementById("main-content");

const introVideo = document.getElementById("intro-video");
const loopVideo = document.getElementById("loop-video");
const bgm = document.getElementById("bgm");

const greetings = document.querySelectorAll("#greetings .line");
const moreGreetings = document.querySelectorAll("#more-greetings .line");
const giftBtn = document.getElementById("gift-btn");
const giftImages = document.getElementById("gift-images");
const finalMessage = document.getElementById("final-message");

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

let countdown = 10;
let countdownTimer;

function startCountdown() {
  countdownTimer = setInterval(() => {
    countdown--;
    countdownEl.textContent = countdown;

    if (countdown === 5) {
      document.getElementById("countdown-title").textContent = "Hôm nay là ngày gì nào? 🎉";
    }

    if (countdown <= 0) {
      clearInterval(countdownTimer);
      countdownEl.style.display = "none";
      passwordInput.disabled = false;
      unlockBtn.disabled = false;
      document.getElementById("countdown-title").textContent = "Mở khóa món quà nhé 💝";
    }
  }, 1000);
}

function checkPassword() {
  const password = passwordInput.value;
  if (password === correctPassword) {
    lockScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    bgm.play();
    startIntro();
  } else {
    lockMessage.textContent = "Sai mật khẩu rồi 😥";
  }
}

function showLines(lines, index = 0, delay = 2500, onFinish = () => {}) {
  if (index >= lines.length) {
    setTimeout(onFinish, 1000);
    return;
  }
  lines[index].classList.add("show");
  setTimeout(() => showLines(lines, index + 1, delay, onFinish), delay);
}

function startIntro() {
  introVideo.play();
  showLines(greetings, 0, 2500, () => {
    setTimeout(() => {
      introVideo.classList.add("hidden");
      loopVideo.classList.remove("hidden");
      loopVideo.play();
      arrowLeft.classList.remove("hidden");
      arrowRight.classList.remove("hidden");

      showLines(moreGreetings, 0, 3000, () => {
        setTimeout(() => {
          giftBtn.classList.remove("hidden");
          setTimeout(() => {
            finalMessage.classList.remove("hidden");
          }, 7000); // sau khi xem quà 7 giây thì hiển thị phản hồi
        }, 2000);
      });
    }, 3000); // chuyển video sau khi intro kết thúc và biến mất từ từ
  });
}

function toggleGift() {
  giftImages.classList.toggle("hidden");
}

function goToIntroVideo() {
  loopVideo.pause();
  loopVideo.classList.add("hidden");
  introVideo.classList.remove("hidden");
  introVideo.play();
}

function goToLoopVideo() {
  introVideo.pause();
  introVideo.classList.add("hidden");
  loopVideo.classList.remove("hidden");
  loopVideo.play();
}

function sendReply() {
  const name = document.getElementById("reply-name").value;
  const message = document.getElementById("reply-message").value;
  if (name && message) {
    alert(`🌟 Lời nhắn của ${name} đã được ghi lại: "${message}"`);
    // Có thể dùng localStorage, hoặc gửi về backend sau này
  } else {
    alert("Hãy điền đầy đủ tên và lời nhắn nhé 🌷");
  }
}

// Bắt đầu đếm ngược khi vào trang
window.onload = startCountdown;
