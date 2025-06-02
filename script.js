<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Happy Birthday Milk 🎂</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="password-screen">
    <img src="cloud.nen.jpg" alt="cloud background" class="background" />
    <div class="clouds-floating">
      <img src="images.png" alt="floating cloud" />
      <img src="images.png" alt="floating cloud" />
    </div>
    <div class="password-box">
      <input type="password" id="password" placeholder="Nhập mật khẩu..." />
      <button id="unlock-btn">Mở quà</button>
      <p id="message"></p>
    </div>
  </div>

  <div id="main-content" style="display: none">
    <audio id="bg-music" src="you-vietra.mp3" loop></audio>

    <video id="video1" src="milkdream.mp4" autoplay muted></video>
    <video id="video2" src="dreamy-video.mp4" loop muted></video>

    <div class="greetings">
      <p class="greeting" id="greet1">🎂 Chúc mừng sinh nhật cậu</p>
      <p class="greeting" id="greet2">✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ</p>
      <p class="greeting" id="greet3">🎁 Hãy nhấp vào đây để mở món quà tớ dành riêng cho cậu</p>
    </div>

    <div class="later-greetings">
      <p class="greeting" id="greet4">🌈 Chúc cậu luôn ngập tràn những điều dịu dàng</p>
      <p class="greeting" id="greet5">💖 Mong mọi ước mơ của cậu sẽ thành sự thật</p>
    </div>

    <div class="gift-section">
      <button id="gift-btn">🎁 Món quà dành riêng cho cậu</button>
      <div class="gift-popup" id="gift-popup">
        <span id="close-popup">✖</span>
        <div class="gift-images">
          <img src="gift-image.png" alt="Gift" />
          <img src="gift-image2.png" alt="Gift" />
          <img src="gift-image3.png" alt="Gift" />
          <img src="gift-image4.png" alt="Gift" />
        </div>
      </div>
    </div>

    <div id="sparkle-container"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
