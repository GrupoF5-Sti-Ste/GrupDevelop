// JS
const hamburgerBtn = document.querySelector('.hamburger-btn');
const videoContainer = document.querySelector('.video-container');

function toggleMenu() {
  hamburgerBtn.classList.toggle('active');
  videoContainer.classList.toggle('open');
}
