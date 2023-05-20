// Get the necessary elements
const body = document.querySelector('body');
const darkModeButton = document.getElementById('dark-mode-button');

// Check if dark mode is enabled in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set the initial mode based on the value in local storage
if (isDarkMode) {
  enableDarkMode();
}

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
}

// Function to toggle dark mode
function toggleDarkMode() {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Add event listener to the dark mode button
darkModeButton.addEventListener('click', toggleDarkMode);
