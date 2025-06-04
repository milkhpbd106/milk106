<div id="passwordScreen" class="password-container">
  <h2>Nhập mật khẩu để mở quà 🎁</h2>
  <input type="password" id="passwordInput" placeholder="Mật khẩu..." />
  <button id="submitPassword">Mở khóa</button>
</div>

<!-- Hiệu ứng mây bồng bềnh -->
<div class="clouds">
  <img src="cloud.png" class="floating-cloud cloud1" />
  <img src="cloud.png" class="floating-cloud cloud2" />
  <img src="cloud.png" class="floating-cloud cloud3" />
  <img src="cloud.png" class="floating-cloud cloud4" />
  <img src="cloud.png" class="floating-cloud cloud5" />
</div>

<!-- Nhạc nền -->
<audio id="bgm" src="You-Vietra.mp3" loop></audio>

<!-- Video đầu tiên: cô gái nhìn mây -->
<video id="firstVideo" style="display:none; width:100%; height:auto;" src="milkdream.mp4"></video>

<!-- Video nền mây dreamy lặp lại -->
<video id="secondVideo" style="display:none; width:100%; height:auto;" src="dreamy-video.mp4" loop muted></video>

<!-- Lời chúc đầu -->
<div id="message1" class="message" style="display:none;">
  <p>Chúc mừng sinh nhật cậu 💖</p>
  <p>Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ ✨</p>
  <p>Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🎁</p>
</div>

<!-- Lời chúc sau cùng -->
<div id="message2" class="message" style="display:none;">
  🌸 Happy Birthday Milk 💖<br />
  Let’s step into a dreamy world together ☁️
</div>

<!-- Nút mở quà -->
<button id="openGiftButton" style="display:none;">Mở quà dành riêng cho cậu 🎀</button>

<!-- Hộp quà hình ảnh -->
<div id="giftGallery">
  <img src="gift-image.png" alt="Gift" class="gift-image" />
</div>

<!-- Tiny letter (hiển thị cuối cùng cùng quà) -->
<div id="tinyLetter" class="message" style="display:none;">
  Một bức thư nhỏ xíu dành riêng cho cậu 💌
</div>

// script.js
const correctPassword = "Milk10/6";
// Để test: bỏ khóa ngày
const unlockDate = new Date("2000-01-01T00:00:00");

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const now = new Date();

  if (input === correctPassword) {
    if (now >= unlockDate) {
      document.getElementById("lock-screen").style.display = "none";
      startBirthdayExperience();
    } else {
      document.getElementById("lock-message").textContent =
        "🎁 Món quà có thể mở vào ngày 10/6 🎈";
    }
  } else {
    document.getElementById("lock-message").textContent = "❌ Sai mật khẩu rồi nè";
  }
}

function startBirthdayExperience() {
  const bgm = document.getElementById("bgm");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const greetings = document.getElementById("greetings");
  const moreGreetings = document.getElementById("more-greetings");
  const giftBtn = document.getElementById("gift-btn");

  document.getElementById("main-content").classList.remove("hidden");
  bgm.play();

  startButterflies();
  startBubbles();

  const lines = greetings.querySelectorAll(".line");
  lines[0].textContent = "🌈 Chúc mừng sinh nhật cậu 💖";
  lines[1].textContent = "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸";
  lines[2].textContent = "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷";

  // Hiện dần từng dòng chúc trong 5s
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("fade-in");
      line.style.opacity = "1";
    }, i * 1600); // mỗi dòng cách nhau 1.6s để kịp hiển thị trong 5s
  });

  // Sau 5s + 2s chờ dòng cuối hiện xong => mờ dần tất cả trong 3s
  setTimeout(() => {
    lines.forEach((line) => {
      line.classList.add("fade-out-smooth");
    });
  }, 7000); // 5s hiện + 2s buffer

  // Đổi video nền sau 7s (lặp lại intro trong lúc chờ)
  setTimeout(() => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
  }, 7000);

  // Hiện 2 lời chúc tiếp theo
  setTimeout(() => {
    moreGreetings.classList.remove("hidden");
    const moreLines = moreGreetings.querySelectorAll(".line");
    moreLines[0].textContent = "🌸 Happy Birthday Milk 💖";
    moreLines[1].textContent = "🌈 Let’s step into a dreamy world together ✨";
    moreLines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("shine");
        line.style.opacity = "1";
      }, i * 3000);
    });
  }, 8000);

  // Hiện nút mở quà sau 15 giây
  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 15000);
}

function toggleGift() {
  const gift = document.getElementById("gift-image");
  gift.classList.toggle("hidden");

  if (!gift.classList.contains("hidden")) {
    playBellSound();
    showMagicDust();
  }
}

function playBellSound() {
  const bell = new Audio("bell.mp3");
  bell.play();
}

function showMagicDust() {
  const dust = document.createElement("div");
  dust.className = "magic-dust";
  document.body.appendChild(dust);
  setTimeout(() => {
    document.body.removeChild(dust);
  }, 3000);
}

function startButterflies() {
  setInterval(() => {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = Math.random() * 100 + "%";
    document.getElementById("butterflies").appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 3000);
  }, 3000);
}

function startBubbles() {
  setInterval(() => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * 100 + "%";
    document.getElementById("main-content").appendChild(bubble);
    setTimeout(() => bubble.remove(), 5000);
  }, 5000);
}
