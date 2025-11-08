let angle = 0;
const btn = document.getElementById("action-btn");

function animateShadows() {
 const dist = 10; // distance of shadows from center

  // Create 4 shadows at 90° intervals
  const shadows = [];
  for (let i = 0; i < 4; i++) {
    const a = angle + (i * Math.PI) / 2;
    const x = Math.cos(a) * dist;
    const y = Math.sin(a) * dist;

    shadows.push(`${x}px ${y}px 8px rgba(0, 0, 0, 0.7)`);
  }

  // Apply all 4 shadows joined by commas
  btn.style.boxShadow = shadows.join(", ");

  angle += 0.03;
  requestAnimationFrame(animateShadows);
}

animateShadows();