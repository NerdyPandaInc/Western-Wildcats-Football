// Recommend adding defer attribute to script tag in HTML: <script src="js/scripts.js" defer></script>
console.log('JS loaded at', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));

// Pop-up control with enhanced error handling
const popupOverlay = document.getElementById('popup-overlay');
const popupOk = document.getElementById('popup-ok');
const mainContent = document.querySelector('.main-content');
const logoFade = document.querySelector('.logo-fade');
const body = document.body;

if (popupOk && popupOverlay && mainContent && logoFade && body) {
    popupOk.addEventListener('click', () => {
        console.log('Button clicked at', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
        popupOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        body.style.overflow = 'auto';
        setTimeout(() => {
            if (logoFade) logoFade.classList.add('visible');
        }, 100);
    });
} else {
    console.error('Pop-up elements missing:', {
        popupOverlay,
        popupOk,
        mainContent,
        logoFade,
        body
    });
}

// Menu toggle and auto-close on selection
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        console.log('Menu toggled');
    });

    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('active');
            console.log('Menu closed on link click:', e.target.textContent);
        }
    });
} else {
    console.error('Menu elements missing:', { menuToggle, navMenu });
}

// Scroll effect for nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        console.log('Scroll detected, nav scrolled:', window.scrollY > 50);
    }
});

// Home Slideshow control (fade-based)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    console.log(`Slide ${index + 1} of ${slides.length} is now active`);
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

if (slides.length > 0) {
    console.log('Slideshow initialized with', slides.length, 'slides');
    window.addEventListener('load', () => {
        showSlide(slideIndex); // Show first slide
        setInterval(nextSlide, 4500); // Rotate every 4.5 seconds
    });
} else {
    console.warn('No slides found for slideshow');
}

// Form submission (placeholder)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted at', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
        alert('Thanks for reaching out! We\'ll get back to you soon.');
    });
} else {
    console.warn('Form element not found');
}
