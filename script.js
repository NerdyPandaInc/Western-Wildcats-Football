document.addEventListener('DOMContentLoaded', () => {
  // Comic-style panel fade-in
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel, i) => {
    panel.style.opacity = 0;
    setTimeout(() => {
      panel.style.transition = 'opacity 1s ease';
      panel.style.opacity = 1;
    }, i * 400);
  });

  // Optional: Add sound effects or pop-up animations later
});
