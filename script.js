// script.js

// Nhạc nền
const audio = new Audio("you-vietra.mp3");
audio.loop = true;

// Mở popup quà
const openGiftBtn = document.getElementById("openGiftBtn");
const giftPopup = document.getElementById("giftPopup");
const closePopup = document.getElementById("closePopup");

openGiftBtn.addEventListener("click", () => {
  giftPopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  giftPopup.style.display = "none";
});

// Click anywhere -> hiệu ứng sáng nhỏ xinh
const sparkleContainer = document.createElement("div");
sparkleContainer.className = "sparkle-container";
document.body.appendChild(sparkleContainer);

document.addEventListener("click", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  sparkleContainer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// Tự động phát nhạc và video khi vào được trang chính
window.addEventListener("load", () => {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    audio.play();
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    video1.play();

    // Hiện lời chúc đầu
    const wishes = document.querySelectorAll(".wishes p");
    wishes.forEach((p, i) => {
      setTimeout(() => {
        p.style.opacity = 1;
      }, i * 6000);
      setTimeout(() => {
        p.style.opacity = 0;
      }, i * 6000 + 6000);
    });

    // Chuyển sang video 2 sau 8s
    setTimeout(() => {
      video1.style.display = "none";
      video2.style.display = "block";
      video2.play();
      document.querySelector(".wishes2").style.display = "flex";
      const wishes2 = document.querySelectorAll(".wishes2 p");
      wishes2.forEach((p, i) => {
        setTimeout(() => {
          p.style.opacity = 1;
        }, i * 4000);
        setTimeout(() => {
          p.style.opacity = 0;
        }, i * 4000 + 4000);
      });
    }, 8000);
  }
});
