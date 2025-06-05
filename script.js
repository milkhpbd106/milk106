// script.js

const PASSWORD = "Milk10/6";
let countdown = 10;
let countdownText = document.getElementById("countdown-text");
let passwordInput = document.getElementById("password-input");
let passwordSubmit = document.getElementById("submit-password");
let passwordError = document.getElementById("password-error");

let interval = setInterval(() => {
  countdown--;
  if (countdown > 5) {
    countdownText.innerHTML = "😔 Kiên nhẫn một chút nhé, tôi có chút chậm...";
  } else if (countdown > 0) {
    countdownText.innerHTML = "🥰 Hôm nay là ngày gì nào?";
  } else {
    clearInterval(interval);
    document.getElementById("countdown-wrapper").classList.add("hidden");
    document.getElementById("password-wrapper").classList.remove("hidden");
  }
}, 1000);

passwordSubmit.addEventListener("click", () => {
  const value = passwordInput.value.trim();
  if (value === PASSWORD) {
    document.getElementById("password-wrapper").classList.add("hidden");
    startMainSequence();
  } else {
    passwordError.innerText = "😔 Sai mật khẩu rồi nè";
  }
});

function startMainSequence() {
  const audio = new Audio("you-vietra.mp3");
  audio.loop = true;
  audio.play();

  let video = document.createElement("video");
  video.src = "milkdream.mp4";
  video.autoplay = true;
  video.onended = () => {
    video.remove();
    startSecondStage();
  };
  document.body.appendChild(video);

  const messages = [
    "🌈 Chúc mừng sinh nhật cậu 💖",
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
    "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
  ];

  const messagesDiv = document.getElementById("messages");
  messages.forEach((msg, i) => {
    setTimeout(() => {
      let p = document.createElement("p");
      p.className = "msg";
      p.textContent = msg;
      messagesDiv.appendChild(p);
    }, i * 2500);
  });
}

function startSecondStage() {
  let video2 = document.createElement("video");
  video2.src = "dreamy-video.mp4";
  video2.autoplay = true;
  video2.loop = true;
  document.body.appendChild(video2);

  const extraMsgs = [
    "🌸 Happy Birthday Milk 💖",
    "🌈 Let’s step into a dreamy world together ✨",
    "🌟 Mong rằng mỗi ngày của cậu đều tràn ngập niềm vui và hạnh phúc 💫",
    "💖 Cảm ơn cậu đã là một phần đặc biệt trong cuộc sống của tớ 🌷"
  ];
  const extraDiv = document.getElementById("extra-messages");

  extraMsgs.forEach((msg, i) => {
    setTimeout(() => {
      let p = document.createElement("p");
      p.className = "msg";
      p.textContent = msg;
      extraDiv.appendChild(p);
    }, i * 3000);
  });

  setTimeout(() => {
    showGift();
  }, 12000);
}

function showGift() {
  let openGift = document.createElement("button");
  openGift.id = "open-gift";
  openGift.textContent = "🎁 Món quà dành riêng cho cậu";
  document.body.appendChild(openGift);

  openGift.addEventListener("click", () => {
    const giftDiv = document.createElement("div");
    giftDiv.id = "gift-images";
    ["gift-image.png", "gift-image1.jpeg", "gift-image2.jpeg", "gift-image3.webp", "gift-image4.webp"].forEach(src => {
      let img = document.createElement("img");
      img.src = src;
      giftDiv.appendChild(img);
    });
    document.body.appendChild(giftDiv);

    setTimeout(() => showFeedback(), 7000);
  });
}

function showFeedback() {
  let feedbackBox = document.createElement("div");
  feedbackBox.id = "feedback-box";
  feedbackBox.innerHTML = `
    <p>📝 Lời nhắn của Fuyuhi: Chúc Milk mãi mãi hạnh phúc nha 💖</p>
    <textarea id="feedback-text" placeholder="Bạn muốn nhắn gì lại không? Milk hay Fuyuhi đều có thể viết nè..."></textarea>
    <div class="feedback-buttons">
      <button onclick="submitFeedback()">Gửi phản hồi</button>
      <button onclick="closeFeedback()">Hủy</button>
    </div>
  `;
  document.body.appendChild(feedbackBox);
}

function submitFeedback() {
  const content = document.getElementById("feedback-text").value;
  localStorage.setItem("birthday_feedback", content);
  alert("Đã lưu phản hồi 💌");
  closeFeedback();
}

function closeFeedback() {
  const box = document.getElementById("feedback-box");
  if (box) box.remove();
}

// ✨ Sparkle effect on click
document.addEventListener('click', function (e) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});
