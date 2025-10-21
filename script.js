document.addEventListener('DOMContentLoaded', () => {
  // ⚠️ Hero Slider logic removed — no .slide/.next/.prev elements in current HTML

  // ✅ League Table Placeholder (future expansion)
  const soccerTable = document.getElementById('soccer-table');
  if (soccerTable) {
    // Initialize sorting, filtering, etc. if plugin is added
    console.log('Soccer table initialized');
  }

  // ✅ Interactive Football Field (Fabric.js)
  const fieldCanvas = document.getElementById('football-field');
  if (fieldCanvas) {
    const canvas = new fabric.Canvas('football-field');

    const player1 = new fabric.Rect({
      left: 100,
      top: 100,
      fill: '#9E1B32', // Crimson red
      width: 20,
      height: 20
    });

    const ball = new fabric.Circle({
      left: 200,
      top: 200,
      fill: '#FFFFFF', // White ball
      radius: 10
    });

    canvas.add(player1);
    canvas.add(ball);

    canvas.on('mouse:down', (options) => {
      if (options.target) {
        canvas.setActiveObject(options.target);
      }
    });

    canvas.renderAll();
  }
});
