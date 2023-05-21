document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var submitButton = document.getElementById("submit-button");
  var successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    var formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          submitButton.style.display = "none";
          successMessage.style.display = "block";
        } else {
          throw new Error("Form submission failed.");
        }
      })
      .catch(function (error) {
        console.error("Form submission error:", error);
        submitButton.disabled = false;
        submitButton.innerHTML = "Submit";
      });
  });
});
