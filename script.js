
// Hero Slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

next.addEventListener('click', () => showSlide(currentSlide + 1));
prev.addEventListener('click', () => showSlide(currentSlide - 1));

// Auto-slide every 5s
setInterval(() => showSlide(currentSlide + 1), 5000);

// League Table (soccer.js auto-initializes on #soccer-table)
document.addEventListener('DOMContentLoaded', () => {
    // It's plug-and-play; table sorts/expands on clicks
});

// Interactive Football Field with Draggable Players (Fabric.js)
const canvas = new fabric.Canvas('football-field');
const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20
});
const circle = new fabric.Circle({
    left: 200,
    top: 200,
    fill: 'blue',
    radius: 10
});
// Add more players as shapes (rect for players, circle for ball)
canvas.add(rect);
canvas.add(circle);

// Make draggable
canvas.on('mouse:down', (options) => {
    if (options.target) {
        canvas.setActiveObject(options.target);
    }
});
canvas.renderAll();
