console.log('JS loaded at', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })); // Confirm script is running with timestamp

// Pop-up control with error handling
const popupOverlay = document.getElementById('popup-overlay');
const popupOk = document.getElementById('popup-ok');
const mainContent = document.querySelector('.main-content');
const logoFade = document.querySelector('.logo-fade');
const body = document.body;

if (popupOk && popupOverlay && mainContent && logoFade && body) {
    popupOk.addEventListener('click', () => {
        console.log('Button clicked'); // Confirm click detected
        popupOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        body.style.overflow = 'auto'; // Enable scrolling
        setTimeout(() => {
            logoFade.classList.add('visible');
        }, 100); // Slight delay for fade-in
    });
} else {
    console.error('One or more pop-up elements not found');
}

// Menu toggle and auto-close on selection
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('active');
        }
    });
} else {
    console.error('Menu elements not found');
}

// Scroll effect for nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Home Slideshow control
let slideIndex = 0;
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');

if (slideshow && slides.length > 0) {
    function showSlides() {
        slideIndex = (slideIndex + 1) % slides.length;
        slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
        setTimeout(showSlides, 4000);
    }
    showSlides(); // Start slideshow
} else {
    console.warn('Home slideshow elements not found or empty');
}

// Join Slideshow control
let joinSlideIndex = 0;
const joinSlideshow = document.querySelector('.join-slideshow');
const joinSlides = document.querySelectorAll('.join-slide');

if (joinSlideshow && joinSlides.length > 0) {
    function showJoinSlides() {
        joinSlideIndex = (joinSlideIndex + 1) % joinSlides.length;
        joinSlideshow.style.transform = `translateX(-${joinSlideIndex * 100}%)`;
        setTimeout(showJoinSlides, 4000);
    }
    showJoinSlides(); // Start join slideshow
} else {
    console.warn('Join slideshow elements not found or empty');
}

// Form submission (placeholder)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for reaching out! We\'ll get back to you soon.');
    });
} else {
    console.warn('Form element not found');
}
