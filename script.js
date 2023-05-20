const body = document.querySelector('body');

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

// Example usage of the toggleDarkMode function
const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);
