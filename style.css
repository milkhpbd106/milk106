const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitPassword');
const errorMessage = document.getElementById('errorMessage');
const passwordScreen = document.getElementById('passwordScreen');
const videoContainer = document.getElementById('videoContainer');
const girlVideo = document.getElementById('girlVideo');
const dreamyVideo = document.getElementById('dreamyVideo');
const bgMusic = document.getElementById('bgMusic');
const openGiftButton = document.getElementById('openGiftButton');
const giftImage = document.getElementById('giftImage');

submitBtn.addEventListener('click', () => {
  const input = passwordInput.value.trim();

  if (input !== 'Milk10/6') {
    errorMessage.innerText = '🥺 Mật khẩu sai rồi nè!';
    return;
  }

  // Mật khẩu đúng → vào trang chính
  passwordScreen.style.display = 'none';
  videoContainer.style.display = 'block';
  girlVideo.play();
  bgMusic.play();

  setTimeout(() => {
    girlVideo.style.display = 'none';
    dreamyVideo.style.display = 'block';
  }, 7000); // Sau 7s thì chuyển sang nền dreamy loop

  setTimeout(() => {
    openGiftButton.style.display = 'block';
  }, 12000); // Sau 12s thì hiện nút mở quà
});

openGiftButton.addEventListener('click', () => {
  giftImage.style.display = giftImage.style.display === 'block' ? 'none' : 'block';
});
