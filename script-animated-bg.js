// Futuristic animated background for coding club
// Uses canvas, neon gradients, interactive particles

const canvas = document.createElement('canvas');
canvas.id = 'bg-animated-network';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '0';
canvas.style.pointerEvents = 'none';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const PARTICLE_COUNT = 48;
const PARTICLE_RADIUS = 3.5;
const LINE_DIST = 140;
const COLORS = [
  [0, '#00f0ff'], // cyan
  [0.5, '#3b82f6'], // blue
  [1, '#a259ff'] // purple
];

let mouse = { x: width/2, y: height/2 };

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.7;
    this.vy = (Math.random() - 0.5) * 0.7;
    this.baseRadius = PARTICLE_RADIUS + Math.random() * 1.5;
    this.radius = this.baseRadius;
    this.colorShift = Math.random();
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
    // Interactivity: pulse if near mouse
    let dx = this.x - mouse.x, dy = this.y - mouse.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 120) {
      this.radius = this.baseRadius + (120-dist)/32;
    } else {
      this.radius += (this.baseRadius - this.radius) * 0.1;
    }
  }
  draw(time) {
    // Neon gradient
    let grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius*3.5);
    for (let [stop, color] of COLORS) {
      grad.addColorStop((stop + this.colorShift + time/8000)%1, color);
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    ctx.fillStyle = grad;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 18;
    ctx.globalAlpha = 0.82;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }
}

let particles = Array.from({length: PARTICLE_COUNT}, () => new Particle());

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i+1; j < particles.length; j++) {
      let a = particles[i], b = particles[j];
      let dx = a.x - b.x, dy = a.y - b.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < LINE_DIST) {
        ctx.save();
        let grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, '#00f0ff');
        grad.addColorStop(0.5, '#3b82f6');
        grad.addColorStop(1, '#a259ff');
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.18 + 0.18*(1-dist/LINE_DIST);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }
  }
}

function animate(time) {
  ctx.clearRect(0, 0, width, height);
  // Dark background
  let bgGrad = ctx.createLinearGradient(0,0,0,height);
  bgGrad.addColorStop(0, '#0a0c1a');
  bgGrad.addColorStop(1, '#181c2f');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);
  drawLines();
  for (let p of particles) {
    p.move();
    p.draw(time);
  }
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

animate(0);
