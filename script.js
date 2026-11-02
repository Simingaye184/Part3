document.addEventListener("DOMContentLoaded", () => {

    // Display current year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("open");
            navLinks.classList.toggle("open");
        });
    }

    // Form
    const form = document.getElementById("enquiry-form");

    if (!form) return;

    const fields = {
        name: {
            input: document.getElementById("name"),
            error: document.getElementById("name-error")
        },

        surname: {
            input: document.getElementById("surname"),
            error: document.getElementById("surname-error")
        },

        email: {
            input: document.getElementById("email"),
            error: document.getElementById("email-error")
        },

        phone: {
            input: document.getElementById("phone"),
            error: document.getElementById("phone-error")
        },

        carcategory: {
            input: document.getElementById("carcategory"),
            error: document.getElementById("carcategory-error")
        }
    };

    const isimo = document.getElementById("form-status");

    // Clear Errors
    function clearErrors() {

        Object.values(fields).forEach((item) => {

            if (item.error) {
                item.error.textContent = "";
            }

        });

        if (isimo) {
            isimo.textContent = "";
        }

    }

    // Validate Form
    function validate() {

        clearErrors();

        let valid = true;

        // Name Validation
        if (fields.name.input.value.trim().length < 2) {

            fields.name.error.textContent =
                "Name must be at least 2 characters long.";

            valid = false;
        }

        // Surname Validation
        if (fields.surname.input.value.trim().length < 2) {

            fields.surname.error.textContent =
                "Surname must be at least 2 characters long.";

            valid = false;
        }

        // Email Validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(fields.email.input.value.trim())) {

            fields.email.error.textContent =
                "Please enter a valid email address.";

            valid = false;
        }

        // Phone Validation
        const phonePattern =
            /^[0-9]{10}$/;

        if (!phonePattern.test(fields.phone.input.value.trim())) {

            fields.phone.error.textContent =
                "Phone number must contain 10 digits.";

            valid = false;
        }

        // Car Category Validation
        if (fields.carcategory.input.value === "") {

            fields.carcategory.error.textContent =
                "Please select a car category.";

            valid = false;
        }

        return valid;
    }

    // Form Submission
    form.addEventListener("submit", (event) => {

        event.preventDefault();

        if (validate()) {

            isimo.textContent =
                "Form submitted successfully!";

            isimo.style.color = "green";

            form.reset();

        } else {

            isimo.textContent =
                "Please correct the errors in the form.";

            isimo.style.color = "red";
        }

    });

    // Real-Time Validation
    Object.values(fields).forEach((item) => {

        if (item.input) {

            item.input.addEventListener("input", () => {

                if (item.error && item.error.textContent) {

                    validate();

                }

            });

        }

    });

});