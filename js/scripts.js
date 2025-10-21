console.log('JS loaded at', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })); // Confirm script is running with timestamp

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
        body.style.overflow = 'auto'; // Enable scrolling
        setTimeout(() => {
            if (logoFade) logoFade.classList.add('visible');
        }, 100); // Slight delay for fade-in
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

// Home Slideshow control
let slideIndex = 0;
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');

if (slideshow && slides.length > 0) {
    const hasTransition = window.getComputedStyle(slideshow).transition !== 'none';
    function showSlides() {
        if (!hasTransition) {
            console.warn('CSS transition not supported, slideshow may not animate');
        }
        slideIndex = (slideIndex + 1) % slides.length;
        slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
        console.log(`Home slide changed to index: ${slideIndex}`);
        setTimeout(showSlides, 4000);
    }
    setTimeout(showSlides, 500); // Delay to ensure DOM is ready
} else {
    console.warn('Home slideshow elements not found or empty:', { slideshow, slidesLength: slides.length });
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
