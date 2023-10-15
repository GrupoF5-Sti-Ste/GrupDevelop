// JS
const loginForm = document.getElementById('login-form');

// Objeto con las credenciales de inicio de sesión válidas
const credentials = {
  email: "example@gmail.com",
  password: "password123"
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Obtener los valores de correo electrónico y contraseña ingresados por el usuario
  const emailInput = loginForm.elements.email.value;
  const passwordInput = loginForm.elements.password.value;
  
  // Comparar los valores ingresados con las credenciales válidas
  if (emailInput === credentials.email && passwordInput === credentials.password) {
    // Redirigir al usuario a la página home.html
    window.location.href = "./home.html";
  } else {
    // Mostrar un mensaje de error si las credenciales son inválidas
    alert("Invalid email or password. Please try again.");
  }
});
