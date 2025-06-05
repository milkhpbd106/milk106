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
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  // Password input is enabled immediately
  passwordInput.disabled = false;
  message.textContent = "🎉 Hôm nay là ngày gì nào 💖";

  // Password logic
  submitBtn.addEventListener("click", () => {
    if (passwordInput.value !== "milk106") {
      message.textContent = "Sai mật khẩu ❌";
      return;
    }

    message.textContent = "";
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
    music.loop = true;
    music.play();

    video1.classList.remove("hidden");
    video1.loop = true;
    video1.play();

    let index = 0;
    const interval = setInterval(() => {
      if (index < 3) {
        wishes[index].classList.add("visible");
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          video1.classList.add("fade-out");
          setTimeout(() => {
            video1.classList.add("hidden");
            video2.classList.remove("hidden");
            showLoopWishes();
            leftArrow.classList.remove("hidden");
            rightArrow.classList.remove("hidden");

            setTimeout(() => {
              openGiftBtn.classList.remove("hidden");
              // Show feedback section after 10s
              setTimeout(() => {
                feedbackSection.classList.remove("hidden");
              }, 10000);
            }, 6000); // delay until wish4 and wish5 fade in and disappear

          }, 3000);
        }, 1000);
      }
    }, 2500);
  }

  function showLoopWishes() {
    video2.loop = true;
    video2.play();
    wishes[3].classList.add("visible");
    setTimeout(() => {
      wishes[4].classList.add("visible");
    }, 3000);
    // Hide them again after 6s
    setTimeout(() => {
      wishes[3].classList.remove("visible");
      wishes[4].classList.remove("visible");
    }, 6000);
  }

  // Arrow navigation after intro
  leftArrow.addEventListener("click", () => {
    addClickEffect(leftArrow);
    video2.pause();
    video2.classList.add("hidden");
    video1.classList.remove("hidden");
    video1.play();
  });

  rightArrow.addEventListener("click", () => {
    addClickEffect(rightArrow);
    video1.pause();
    video1.classList.add("hidden");
    video2.classList.remove("hidden");
    video2.play();
  });

  function addClickEffect(el) {
    el.classList.add("clicked");
    setTimeout(() => el.classList.remove("clicked"), 300);
  }

  // Gift click
  openGiftBtn.addEventListener("click", () => {
    if (giftBox.classList.contains("hidden")) {
      giftBox.classList.remove("hidden");
    } else {
      giftBox.classList.add("hidden");
    }
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

  // Inject floating cloud styles
  const style = document.createElement('style');
  style.textContent = `
    .floating-cloud {
      position: absolute;
      animation: floatCloud linear infinite;
      pointer-events: none;
      opacity: 0.7;
      z-index: 1;
    }

    @keyframes floatCloud {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100vw);
      }
    }

    .size0 { width: 60px; }
    .size1 { width: 90px; }
    .size2 { width: 120px; }

    .fade-out {
      opacity: 0;
      transition: opacity 3s ease;
    }

    .clicked {
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.7);
    }
  `;
  document.head.appendChild(style);
});
