document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("auth-form");
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".btn-next");
    const prevButtons = document.querySelectorAll(".btn-prev");

    let currentStep = 1;

    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (validateStep(currentStep)) {
                steps[currentStep - 1].style.display = "none";
                currentStep++;
                steps[currentStep - 1].style.display = "block";
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener("click", () => {
            steps[currentStep - 1].style.display = "none";
            currentStep--;
            steps[currentStep - 1].style.display = "block";
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            alert("Authentication successful!");
        }
    });

    function validateStep(step) {
        if (step === 1) {
            const age = form.elements.age.value;
            const name = form.elements.name.value;
            if (!age || !name) {
                alert("Age and name are required.");
                return false;
            }
        } else if (step === 2) {
            const phone = form.elements.phone.value;
            const email = form.elements.email.value;
            if (!phone || !email) {
                alert("Phone number and email are required.");
                return false;
            }
        } else if (step === 3) {
            const country = form.elements.country.value;
            const city = form.elements.city.value;
            const street = form.elements.street.value;
            if (!country || !city || !street) {
                alert("Country, city, and street are required.");
                return false;
            }
        }
        return true;
    }
});
