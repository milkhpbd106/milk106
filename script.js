let countdown = 10;
const countdownElement = document.getElementById("countdown");
const passwordInput = document.getElementById("password-input");
const unlockBtn = document.getElementById("unlock-btn");

const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown === 5) {
    document.getElementById("countdown-title").textContent = "Hôm nay là ngày gì nào? 🎈";
  }
  if (countdown === 0) {
    clearInterval(interval);
    passwordInput.disabled = false;
    unlockBtn.disabled = false;
  }
}, 1000);

function checkPassword() {
  const password = passwordInput.value;
  if (password === "Milk10/6") {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    startMainSequence();
  } else {
    document.getElementById("lock-message").textContent = "Sai mật khẩu rồi 😢";
  }
}

function startMainSequence() {
  const bgm = document.getElementById("bgm");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const greetings = document.getElementById("greetings");
  const moreGreetings = document.getElementById("more-greetings");
  const giftBtn = document.getElementById("gift-btn");
  const finalMessage = document.getElementById("final-message");

  bgm.play();
  introVideo.play();
  greetings.classList.remove("hidden");

  setTimeout(() => {
    greetings.classList.add("hidden");
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
    loopVideo.play();
    moreGreetings.classList.remove("hidden");
  }, 10000);

  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 18000);

  setTimeout(() => {
    finalMessage.classList.remove("hidden");
  }, 25000);
}

function toggleGift() {
  document.getElementById("gift-images").classList.toggle("hidden");
}

function goToIntroVideo() {
  document.getElementById("loop-video").classList.add("hidden");
  document.getElementById("intro-video").classList.remove("hidden");
}

function goToLoopVideo() {
  document.getElementById("intro-video").classList.add("hidden");
  document.getElementById("loop-video").classList.remove("hidden");
}

function sendReply() {
  const name = document.getElementById("reply-name").value;
  const message = document.getElementById("reply-message").value;
  if (name && message) {
    alert(`💌 Gửi thành công lời nhắn của ${name}!`);
  } else {
    alert("Vui lòng điền đầy đủ thông tin nhé ✨");
  }
}
