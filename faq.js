
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item h2");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarNav = document.querySelector(".navbar-nav");

  if (menuToggle && navbarNav) {
      menuToggle.addEventListener("click", () => {
          navbarNav.classList.toggle("active");
          menuToggle.classList.toggle("active");
      });

      // Close menu when clicking a link (useful for mobile)
      document.querySelectorAll(".navbar-nav a").forEach(link => {
          link.addEventListener("click", () => {
              navbarNav.classList.remove("active");
              menuToggle.classList.remove("active");
          });
      });
  } else {
      console.error("Navbar elements not found. Check your HTML structure.");
  }
});
// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add a click event listener to each question
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        // Toggle the 'active' class for styling
        question.classList.toggle('active');

        // Find the corresponding answer element
        const answer = question.nextElementSibling;

        // Toggle visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Hide the answer
        } else {
            answer.style.display = 'block'; // Show the answer
        }
    });
});
