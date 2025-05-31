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

// Bỏ phần đếm ngược vì con muốn xem ngay
document.getElementById('timeLeft').style.display = 'none';

submitBtn.addEventListener('click', () => {
  const input = passwordInput.value.trim();

  if (input !== 'Milk10/6') {
    errorMessage.innerText = '🥺 Mật khẩu sai rồi nè!';
    return;
  }

  // Nếu đúng mật khẩu thì vào web luôn
  passwordScreen.style.display = 'none';
  videoContainer.style.display = 'block';
  girlVideo.play();
  bgMusic.play();

  setTimeout(() => {
    girlVideo.pause();
    girlVideo.currentTime = 0;
    girlVideo.style.display = 'none';
    dreamyVideo.style.display = 'block';
    dreamyVideo.play();
  }, 7000);

  setTimeout(() => {
    openGiftButton.style.display = 'block';
  }, 12000);
});

openGiftButton.addEventListener('click', () => {
  giftImage.style.display = giftImage.style.display === 'block' ? 'none' : 'block';
});
