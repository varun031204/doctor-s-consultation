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
