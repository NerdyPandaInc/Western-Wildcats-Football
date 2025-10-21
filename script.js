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

  // 🎥 Random Video Loader
  const videoContainer = document.getElementById('video-container');
  const videoList = [
    { src: 'videos/highlight1.mp4', label: 'Week 1 Highlights' },
    { src: 'videos/highlight2.mp4', label: 'Week 2 Highlights' },
    { src: 'videos/highlight3.mp4', label: 'Week 3 Highlights' },
    { src: 'videos/highlight4.mp4', label: 'Practice Drills' },
    { src: 'videos/highlight5.mp4', label: 'Locker Room Moments' }
  ];

  function loadRandomVideos() {
    videoContainer.innerHTML = '';
    const shuffled = videoList.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);

    selected.forEach(video => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <video controls width="100%">
          <source src="${video.src}" type="video/mp4" />
        </video>
        <p>${video.label}</p>
      `;
      videoContainer.appendChild(card);
    });
  }

  loadRandomVideos();

  // 🔁 Auto-refresh every 30 seconds
  setInterval(() => {
    loadRandomVideos();
  }, 30000);
});
