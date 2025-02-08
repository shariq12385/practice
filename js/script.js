// Selecting elements for login form and navbar
let login = document.querySelector(".login-form");
let navbar = document.querySelector(".header .navbar");

document.querySelector("#login-btn").onclick = () => {
    login.classList.toggle("active");
    navbar.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
    login.classList.remove("active");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    login.classList.remove("active");
    navbar.classList.remove("active");
};

// Swiper for Gallery Section
var swiper = new Swiper(".gallery-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
    },
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for validation

    let name = document.querySelector('input[placeholder="name"]');
    let email = document.querySelector('input[placeholder="email"]');
    let number = document.querySelector('input[placeholder="number"]');
    let subject = document.querySelector('input[placeholder="subject"]');
    let message = document.querySelector("textarea");

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (element) {
        element.textContent = '';
    });

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name.value) || name.value.length < 3) {
        document.getElementById("name-error").textContent = "Name must be at least 3 letters (no numbers or symbols).";
        isValid = false;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(number.value)) {
        document.getElementById("number-error").textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    }

    // Subject validation
    if (subject.value.trim() === "") {
        document.getElementById("subject-error").textContent = "Subject cannot be empty.";
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        document.getElementById("message-error").textContent = "Message cannot be empty.";
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
        alert("Form submitted successfully!");
    }
});



