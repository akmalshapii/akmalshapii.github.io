/* ============================================================
   main.js — Theme toggle + scroll animations
   ============================================================ */

// ── THEME ──────────────────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

html.setAttribute('data-theme', savedTheme);
setToggleIcon(savedTheme);

toggleBtn?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    setToggleIcon(next);
});

function setToggleIcon(theme) {
    const icon = document.querySelector('.toggle-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
}

// ── SCROLL FADE-IN ─────────────────────────────────────────
// Inject the visible-state styles once
const style = document.createElement('style');
style.textContent = `.fade-in { opacity: 0; transform: translateY(14px); transition: opacity 0.55s ease, transform 0.55s ease; } .fade-in.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Attach to any card / list item that should animate in
const targets = document.querySelectorAll(
    '.project-card, .writing-item, .timeline-item, .about-content'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger siblings slightly
            const delay = (i % 4) * 60;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

targets.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ── ACTIVE NAV LINK ────────────────────────────────────────
// Highlight the correct nav link based on current page
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ── DISABLE RIGHT CLICK ────────────────────────────────────
document.addEventListener('contextmenu', e => e.preventDefault());