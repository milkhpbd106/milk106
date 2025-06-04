document.addEventListener("DOMContentLoaded", () => {
  const passwordSection = document.getElementById("password-section");
  const passwordInput = document.getElementById("password-input");
  const enterButton = document.getElementById("enter-button");
  const message = document.getElementById("message");
  const countdownText = document.getElementById("countdown");
  const cloudContainer = document.getElementById("cloud-container");

  const giftButton = document.getElementById("gift-button");
  const giftImages = document.getElementById("gift-images");
  const responseBox = document.getElementById("response-box");
  const showResponseBtn = document.getElementById("show-response");
  const closeResponseBtn = document.getElementById("close-response");

  const correctPassword = "Milk10/6";

  // Hiệu ứng đếm ngược trước khi cho nhập mật khẩu
  let count = 10;
  passwordInput.style.display = "none";
  enterButton.style.display = "none";
  const countdownInterval = setInterval(() => {
    countdownText.textContent = `⏳ ${count}s để mở món quà...`;
    count--;
    if (count < 0) {
      clearInterval(countdownInterval);
      countdownText.style.display = "none";
      passwordInput.style.display = "block";
      enterButton.style.display = "block";
    }
  }, 1000);

  // Mây bay tự nhiên
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement("img");
    cloud.src = "images.png";
    cloud.classList.add("floating-cloud");
    cloud.style.left = `${Math.random() * 100}%`;
    cloud.style.top = `${Math.random() * 100}%`;
    cloud.style.animationDuration = `${10 + Math.random() * 10}s`;
    cloudContainer.appendChild(cloud);
  }

  enterButton.addEventListener("click", () => {
    const entered = passwordInput.value;
    if (entered !== correctPassword) {
      message.innerHTML = "❌ Sai mật khẩu!";
      return;
    }

    message.innerHTML = "🎉 Hôm nay là ngày gì nào~";
    setTimeout(() => {
      document.getElementById("password-page").style.display = "none";
      document.getElementById("main-page").style.display = "block";
      initMainPage();
    }, 10000);
  });

  function initMainPage() {
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    const audio = document.getElementById("birthday-audio");
    const wishes = document.querySelectorAll(".wish");

    audio.play();
    video1.style.display = "block";
    video1.play();

    wishes.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = 1;
      }, index * 2300);
    });

    setTimeout(() => {
      wishes.forEach(el => el.style.opacity = 0);
      video1.style.display = "none";
      video2.style.display = "block";
      video2.play();

      // Hiện lời chúc thứ hai
      const secondWishes = document.querySelectorAll(".second-wish");
      secondWishes.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = 1;
        }, index * 3000);
      });
    }, 10000);
  }

  giftButton.addEventListener("click", () => {
    giftImages.classList.toggle("show");
    giftButton.classList.toggle("active");
  });

  showResponseBtn.addEventListener("click", () => {
    responseBox.style.display = "block";
  });

  closeResponseBtn.addEventListener("click", () => {
    responseBox.style.display = "none";
  });
});
