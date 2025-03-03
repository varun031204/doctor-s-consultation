document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".doctor-search-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const speciality = document.getElementById("speciality").value;
        const date = document.getElementById("date").value;
        const location = document.getElementById("location").value;

        if (!speciality || !date || !location) {
            alert("Please fill in all required fields.");
            return;
        }

        alert(`Searching for ${speciality} doctors in ${location} on ${date}`);
        // Redirect to a results page or fetch data from backend
    });
});
