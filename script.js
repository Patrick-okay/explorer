document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const submitBtn = document.querySelector('#submit-btn');
  const statusMessage = document.querySelector('#submission-status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitBtn.disabled = true;
    statusMessage.textContent = 'Sending...';

    if (validateForm()) {
      // Simulating form submission delay
      setTimeout(function() {
        form.reset();
        submitBtn.disabled = false;
        statusMessage.textContent = 'Message sent successfully!';
      }, 2000);
    } else {
      submitBtn.disabled = false;
      statusMessage.textContent = 'Please fill in all fields.';
    }
  });

  function validateForm() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
      return false;
    }

    return true;
  }
});
