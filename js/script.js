// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function() {
    // Check scroll position
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "flex"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }

    // Close the navbar if it's open
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Menu toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}