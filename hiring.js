document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".application-form");
    const modal = document.querySelector(".custom-modal");
    const modalMessage = document.querySelector(".modal-message");
    const closeModal = document.querySelector(".close-modal");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Display the modal
        modalMessage.textContent = "Thank you for registering, your profile is submitted for verification.";
        modal.style.display = "flex";

        // Auto-close modal after 3 seconds and redirect to homepage
        setTimeout(() => {
            modal.style.display = "none";
            form.reset(); // Reset the form after submission
            window.location.href = "index.html"; // Redirect to home page (change URL if needed)
        }, 3000);
    });

    // Close modal manually and redirect
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        form.reset(); // Reset the form when closed manually
        window.location.href = "index.html"; // Redirect to home page
    });

    // Close modal if clicked outside and redirect
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            form.reset();
            window.location.href = "index.html"; // Redirect to home page
        }
    });
});
