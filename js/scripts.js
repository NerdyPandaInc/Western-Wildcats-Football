console.log('JS loaded'); // Confirm script is running

// Pop-up control
const popupOverlay = document.getElementById('popup-overlay');
const popupOk = document.getElementById('popup-ok');
const mainContent = document.querySelector('.main-content');
const logoFade = document.querySelector('.logo-fade');
const body = document.body;

popupOk.addEventListener('click', () => {
    console.log('Button clicked'); // Confirm click detected
    popupOverlay.style.display = 'none';
    mainContent.style.display = 'block';
    body.style.overflow = 'auto'; // Enable scrolling
    setTimeout(() => {
        logoFade.classList.add('visible');
    }, 100); // Slight delay for fade-in
});

// Menu toggle and auto-close on selection
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
    }
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
