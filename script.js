document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");
  const passwordInput = document.getElementById("password");
  const submitBtn = document.getElementById("submit");
  const messageEl = document.getElementById("message");
  const mainContent = document.getElementById("main-content");
  const music = document.getElementById("bg-music");
  const openGiftBtn = document.getElementById("openGift");
  const giftBox = document.getElementById("gift-box");
  const wishTexts = document.querySelectorAll(".wish-text");
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const feedbackSection = document.getElementById("feedback-section");
  const milkBtn = document.getElementById("milk-btn");
  const fuyuhiBtn = document.getElementById("fuyuhi-btn");
  const unlockText = document.getElementById("unlock-text");

  let count = 10;
  countdownEl.innerText = count;
  passwordInput.disabled = true;
  unlockText.style.opacity = 0;

  const timer = setInterval(() => {
    count--;
    countdownEl.innerText = count;
    if (count === 0) {
      clearInterval(timer);
      countdownEl.style.display = "none";
      passwordInput.disabled = false;
      unlockText.style.opacity = 1;
      unlockText.classList.add("glow-text");
    }
  }, 1000);

  submitBtn.addEventListener("click", () => {
    const pwd = passwordInput.value.trim();
    if (pwd.toLowerCase() === "milk") {
      messageEl.innerHTML = "<span class='correct'>Hôm nay là ngày gì nào ✨</span>";
      setTimeout(() => {
        document.getElementById("password-screen").style.display = "none";
        mainContent.classList.remove("hidden");
        music.play();
        video1.play();
        showWishes();
      }, 10000);
    } else {
      messageEl.innerHTML = "Sai mật khẩu rồi cậu ơi 😢";
    }
  });

  function showWishes() {
    setTimeout(() => wishTexts[0].classList.add("visible"), 1000);
    setTimeout(() => wishTexts[1].classList.add("visible"), 3000);
    setTimeout(() => wishTexts[2].classList.add("visible"), 5000);

    video1.addEventListener("ended", () => {
      video1.classList.add("fade-out");
      setTimeout(() => {
        video1.style.display = "none";
        video2.style.display = "block";
        video2.play();
        setTimeout(() => {
          wishTexts[3].classList.add("visible");
        }, 1000);
        setTimeout(() => {
          wishTexts[4].classList.add("visible");
        }, 4000);
      }, 3000);
    });
  }

  openGiftBtn.addEventListener("click", () => {
    giftBox.classList.remove("hidden");
    openGiftBtn.style.display = "none";
    setTimeout(() => {
      feedbackSection.classList.remove("hidden");
    }, 3000);
  });

  milkBtn.addEventListener("click", () => {
    alert("Cảm ơn Milk đã phản hồi 💌");
  });

  fuyuhiBtn.addEventListener("click", () => {
    alert("Cảm ơn Fuyuhi đã phản hồi 💌");
  });

  // Hiệu ứng bụi sáng khi click
  document.addEventListener("click", (e) => {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
});
