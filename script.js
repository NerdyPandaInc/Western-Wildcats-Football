// Show pop-up on load
window.addEventListener('load', () => {
    document.getElementById('popup-overlay').classList.add('active');
});

// Pop-up control
const popupOk = document.getElementById('popup-ok');
popupOk.addEventListener('click', () => {
    document.getElementById('popup-overlay').classList.remove('active');
    // Fade in logo after pop-up closes
    setTimeout(() => {
        document.querySelector('.hero-logo-container').classList.add('visible');
    }, 300); // Small delay for smooth transition
});

// Scroll effect for nav
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Slideshow control
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}
showSlides();

// Form submission (placeholder)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon.');
});
