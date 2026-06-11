// ── Video modal ──
function openVideo(src) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  const source = document.getElementById('modalVideoSrc');
  source.src = src;
  video.load();
  video.play();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideo(e) {
  if (e && e.target !== document.getElementById('videoModal') && !e.target.closest('.video-close')) return;
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo({}); });

// ── Filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.tags === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ── Mobile menu ──
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Scroll fade-in ──
const fadeEls = document.querySelectorAll('.project-card, .academic-card, .skill-card, .hero-stats');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  observer.observe(el);
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id], footer[id]');
const navAs = document.querySelectorAll('.nav-links a[href^="#"]');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'var(--text)' : '';
        a.style.fontWeight = a.getAttribute('href') === '#' + entry.target.id ? '600' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));
