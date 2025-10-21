// Pop-up control
const popupOverlay = document.getElementById('popup-overlay');
const popupOk = document.getElementById('popup-ok');
const mainContent = document.querySelector('.main-content');
const logoContainer = document.querySelector('.hero-logo-container');
const body = document.body;

popupOk.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    mainContent.style.display = 'block';
    body.style.overflow = 'auto'; // Enable scrolling
    setTimeout(() => {
        logoContainer.classList.add('visible');
    }, 100); // Slight delay for fade-in
});

// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll effect for nav
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Slideshow control
let slideIndex = 0;
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
function showSlides() {
    slideIndex = (slideIndex + 1) % slides.length;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 4000);
}
showSlides();

// Form submission (placeholder)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon.');
});
