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

// Pop-up control
const popupOverlay = document.getElementById('popup-overlay');
const popupOk = document.getElementById('popup-ok');
popupOk.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    document.querySelector('.logo').style.animation = 'fadeIn 1s ease-in forwards'; // Trigger logo fade-in
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

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon.');
});

// Ensure pop-up shows on load
window.addEventListener('load', () => {
    popupOverlay.style.display = 'flex';
});
