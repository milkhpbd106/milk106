// script.js

let countdown = 10;
const countdownEl = document.getElementById('countdown');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const lockMessage = document.getElementById('lock-message');
const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const introVideo = document.getElementById('intro-video');
const loopVideo = document.getElementById('loop-video');
const bgm = document.getElementById('bgm');
const greetings = document.getElementById('greetings');
const moreGreetings = document.getElementById('more-greetings');
const giftBtn = document.getElementById('gift-btn');
const giftImages = document.getElementById('gift-images');
const finalMessage = document.getElementById('final-message');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const cloudContainer = document.getElementById('cloud-container');

// Countdown start
const countdownInterval = setInterval(() => {
  countdown--;
  countdownEl.textContent = countdown;
  if (countdown === 5) {
    document.getElementById('countdown-title').textContent = 'Hôm nay là ngày gì nào? 🎈';
  }
  if (countdown <= 0) {
    clearInterval(countdownInterval);
    countdownEl.style.display = 'none';
    passwordInput.disabled = false;
    unlockBtn.disabled = false;
    document.getElementById('countdown-title').textContent = 'Nhập mật khẩu mở quà nhé 🎀';
  }
}, 1000);

// Password check
function checkPassword() {
  const password = passwordInput.value;
  if (password === 'Milk10/6') {
    lockScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    introVideo.classList.remove('hidden');
    introVideo.play();
    bgm.play();
    setTimeout(() => {
      introVideo.classList.add('fade-out');
      setTimeout(() => {
        introVideo.classList.add('hidden');
        loopVideo.classList.remove('hidden');
        loopVideo.play();
        arrowLeft.classList.remove('hidden');
        arrowRight.classList.remove('hidden');
        showGreetingLines();
      }, 3000);
    }, 10000);
  } else {
    lockMessage.textContent = 'Sai mật khẩu rồi 😢';
  }
}

// Hiện từng dòng lời chúc
function showGreetingLines() {
  const lines = [
    '🎂 Chúc mừng sinh nhật cậu!',
    '🌸 Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ.',
    '🎁 Hãy nhấp vào đây để mở món quà tớ dành riêng cho cậu'
  ];
  const moreLines = [
    '🌈 Mỗi khoảnh khắc bên cậu đều như một giấc mơ dễ thương.',
    '💖 Tớ rất biết ơn vì cậu tồn tại trên thế giới này.'
  ];
  const greetingLines = greetings.querySelectorAll('.line');
  lines.forEach((line, i) => {
    setTimeout(() => {
      greetingLines[i].textContent = line;
      greetingLines[i].classList.add('fade-in');
    }, i * 2500);
  });

  setTimeout(() => {
    greetings.classList.add('hidden');
    moreGreetings.classList.remove('hidden');
    const moreGreetingLines = moreGreetings.querySelectorAll('.line');
    moreLines.forEach((line, i) => {
      setTimeout(() => {
        moreGreetingLines[i].textContent = line;
        moreGreetingLines[i].classList.add('fade-in-glow');
      }, i * 3000);
    });
  }, 9000);

  setTimeout(() => {
    giftBtn.classList.remove('hidden');
  }, 18000);
}

// Mở quà
function toggleGift() {
  giftImages.classList.remove('hidden');
  finalMessage.classList.remove('hidden');
  giftBtn.classList.add('hidden');
}

// Chuyển video
arrowLeft.addEventListener('click', () => {
  loopVideo.src = 'milkdream.mp4';
  loopVideo.play();
});
arrowRight.addEventListener('click', () => {
  loopVideo.src = 'dreamy-video.mp4';
  loopVideo.play();
});

// Hiệu ứng click
window.addEventListener('click', (e) => {
  const effect = document.createElement('div');
  effect.className = 'click-effect';
  effect.style.top = `${e.clientY}px`;
  effect.style.left = `${e.clientX}px`;
  document.body.appendChild(effect);
  setTimeout(() => effect.remove(), 1000);
});

// Gửi phản hồi
function sendReply() {
  const name = document.getElementById('reply-name').value.trim();
  const message = document.getElementById('reply-message').value.trim();
  if (name && message) {
    alert(`Cảm ơn ${name} đã gửi lời nhắn 💌\n\n"${message}"`);
  } else {
    alert('Viết gì đó rồi gửi nè~ 📝');
  }
}

// Mây bay giao diện nhập mật khẩu
function animateClouds() {
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement('img');
    cloud.src = 'images.png';
    cloud.className = 'floating-cloud';
    cloud.style.top = Math.random() * 80 + '%';
    cloud.style.left = Math.random() * 90 + '%';
    cloudContainer.appendChild(cloud);
  }
}

animateClouds();
