document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");
  const passwordInput = document.getElementById("password");
  const submitBtn = document.getElementById("submit");
  const message = document.getElementById("message");
  const passwordScreen = document.getElementById("password-screen");
  const mainContent = document.getElementById("main-content");
  const wishes = document.querySelectorAll(".wish-text");
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const music = document.getElementById("bg-music");
  const openGiftBtn = document.getElementById("openGift");
  const giftBox = document.getElementById("gift-box");
  const feedbackSection = document.getElementById("feedback-section");
  const cloudContainer = document.getElementById("clouds");

  // Countdown to unlock input
  let timeLeft = 10;
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      passwordInput.disabled = false;
      message.textContent = "";
    }
  }, 1000);

  // Password logic
  submitBtn.addEventListener("click", () => {
    if (passwordInput.value !== "milk106") {
      message.textContent = "Sai mật khẩu ❌";
      return;
    }

    message.textContent = "🎉 Hôm nay là ngày gì nào 💖";
    passwordInput.disabled = true;
    submitBtn.disabled = true;

    let enterWait = 10;
    const enterCountdown = setInterval(() => {
      enterWait--;
      countdownEl.textContent = enterWait;
      if (enterWait === 0) {
        clearInterval(enterCountdown);
        passwordScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
        startCelebration();
      }
    }, 1000);
  });

  function startCelebration() {
    music.play();
    video1.play();

    // Show wishes one by one during video1
    let index = 0;
    const interval = setInterval(() => {
      if (index < 3) {
        wishes[index].classList.add("visible");
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          video1.classList.add("hidden");
          video2.classList.remove("hidden");
          showLoopWishes();
        }, 3000);
      }
    }, 2500);
  }

  function showLoopWishes() {
    video2.play();
    wishes[3].classList.add("visible");
    setTimeout(() => {
      wishes[4].classList.add("visible");
    }, 3000);
  }

  // Gift click
  openGiftBtn.addEventListener("click", () => {
    giftBox.classList.remove("hidden");
    feedbackSection.classList.remove("hidden");
  });

  // Sparkle click effect
  document.body.addEventListener("click", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.pageX - 5}px`;
    sparkle.style.top = `${e.pageY - 5}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });

  // Animate floating clouds
  function createFloatingCloud(imgSrc, size, duration, startTop, startLeft) {
    const cloud = document.createElement("img");
    cloud.src = imgSrc;
    cloud.className = `floating-cloud ${size}`;
    cloud.style.top = `${startTop}%`;
    cloud.style.left = `${startLeft}%`;
    cloud.style.animationDuration = `${duration}s`;
    cloudContainer.appendChild(cloud);
  }

  for (let i = 0; i < 6; i++) {
    createFloatingCloud("images.png", "size" + (i % 3), 30 + Math.random() * 20, Math.random() * 80, Math.random() * 100);
  }
});
