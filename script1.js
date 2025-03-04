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
function handlePayment() {
    var options = {
        key: "rzp_test_WmyWrKo8Pjncen", // Get this from Razorpay Dashboard
        amount: 500, // Amount in paise (₹500.00)
        currency: "INR",
        name: "Doctor Consultation",
        description: "Book a consultation with Dr. Jane Doe",
        image: "logo.png", // Your logo URL
        handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // You can now save this transaction info to your database
        },
        prefill: {
            name: document.querySelector("[name='name']").value,
            email: document.querySelector("[name='email']").value,
            contact: document.querySelector("[name='phone']").value,
        },
        theme: {
            color: "#007bff",
        },
    };

    var rzp = new Razorpay(options);
    rzp.open();
}
