const button = document.querySelector('#switch');

function toggleMode() {
  const html = document.querySelector('html');
  html.classList.toggle("light")

  const imgProfile = document.querySelector('.profile img')
  
  // Sustituir imagen
  if (html.classList.contains("light")) {
    imgProfile.setAttribute("src", "./assets/avatar-light.png")
  } else {
    imgProfile.setAttribute("src", "./assets/avatar.png")
  }
}

button.addEventListener('click', toggleMode);
