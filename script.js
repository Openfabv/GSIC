// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.topnav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Draw faint background grid inside the hero floorplan (visual texture only)
const gridGroup = document.querySelector('.fp-grid');
if (gridGroup) {
  const ns = 'http://www.w3.org/2000/svg';
  const w = 560, h = 420, step = 40;
  for (let x = 0; x <= w; x += step) {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x); line.setAttribute('y1', 0);
    line.setAttribute('x2', x); line.setAttribute('y2', h);
    line.setAttribute('stroke', 'rgba(255,255,255,0.03)');
    gridGroup.appendChild(line);
  }
  for (let y = 0; y <= h; y += step) {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', 0); line.setAttribute('y1', y);
    line.setAttribute('x2', w); line.setAttribute('y2', y);
    line.setAttribute('stroke', 'rgba(255,255,255,0.03)');
    gridGroup.appendChild(line);
  }
}
