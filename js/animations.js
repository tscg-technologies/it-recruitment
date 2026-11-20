/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Motion & Interactive Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    }
  }

  // 2. Cinematic Hero Network Canvas Animation
  const canvas = document.getElementById('hero-canvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 42;
    const maxDistance = 140;

    const resizeCanvas = () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.75;
        this.vy = (Math.random() - 0.5) * 0.75;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.4 ? 'rgba(53, 198, 232, ' : 'rgba(71, 125, 255, ';
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(71, 125, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  // 3. Talent Matching Interactive Conceptual Visualization
  const matchPaths = [
    { skill: "Python", discipline: "Data & AI Systems", role: "Senior Data & ML Engineer" },
    { skill: "React / TypeScript", discipline: "Frontend Architecture", role: "Lead Frontend Engineer" },
    { skill: "AWS / Kubernetes", discipline: "Cloud & DevOps", role: "DevOps Platform Architect" },
    { skill: "Java / Spring Boot", discipline: "Enterprise Backend", role: "Senior Microservices Engineer" },
    { skill: "SIEM / SOC", discipline: "Cybersecurity Defense", role: "Security Incident Analyst" }
  ];

  const skillNodes = document.querySelectorAll('.viz-node-skill');
  const disciplineNode = document.getElementById('viz-discipline-node');
  const roleNode = document.getElementById('viz-role-node');

  if (skillNodes.length > 0 && disciplineNode && roleNode) {
    skillNodes.forEach(node => {
      node.addEventListener('click', () => {
        const selectedSkill = node.dataset.skill;
        skillNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const match = matchPaths.find(p => p.skill.toLowerCase().includes(selectedSkill.toLowerCase())) || matchPaths[0];

        disciplineNode.textContent = match.discipline;
        disciplineNode.classList.add('active');
        roleNode.textContent = match.role;
        roleNode.classList.add('active');

        setTimeout(() => {
          disciplineNode.classList.remove('active');
          roleNode.classList.remove('active');
        }, 600);
      });
    });
  }
});
