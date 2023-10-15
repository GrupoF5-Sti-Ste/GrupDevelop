// Obtener los elementos del carrusel
const carrusel = document.querySelector('.carruseles');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

// Definir la posición inicial del carrusel
let posicionActual = 0;

// Función para desplazar el carrusel hacia la izquierda
btnLeft.addEventListener('click', function() {
  if (posicionActual > 0) {
    posicionActual--;
    carrusel.style.transform = `translateX(-${posicionActual * 100}%)`;
  }
});

// Función para desplazar el carrusel hacia la derecha
btnRight.addEventListener('click', function() {
  if (posicionActual < carrusel.children.length - 1) {
    posicionActual++;
    carrusel.style.transform = `translateX(-${posicionActual * 100}%)`;
  }
});