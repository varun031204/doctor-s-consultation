document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            const href = button.getAttribute("href");

            if (!href || href === "#") {
                event.preventDefault(); // Prevent redirection
                showErrorPopup("Sorry, Our applications are closed for this role.");
            }
        });
    });

    // Function to display the pop-up
    function showErrorPopup(message) {
        // Create modal container
        const modal = document.createElement("div");
        modal.classList.add("error-modal");

        // Create modal content
        modal.innerHTML = `
            <div class="modal-content">
                <p>${message}</p>
                <button class="close-modal">OK</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal when clicking the button
        modal.querySelector(".close-modal").addEventListener("click", function () {
            modal.remove();
        });

        // Close modal if clicking outside the content
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }
});
