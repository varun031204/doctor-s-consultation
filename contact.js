document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    // Show success message
    let successMessage = document.getElementById("success-message");
    successMessage.style.display = "block"; // Make it visible

    // Optionally, clear the form
    this.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});
