function toggleMenu() {
  var popup = document.querySelector('.popup');
  
  if (popup.style.display === 'none') {
      popup.style.display = 'block';
  } else {
      popup.style.display = 'none';
  }
}

function closePopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'none';
}