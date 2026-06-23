// ===== CONTACT FORM =====
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  const btn = document.querySelector('.btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('success-msg').style.display = 'block';
    btn.textContent = 'Sent!';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }, 1000);
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ACTIVE NAV HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? '#0C447C' : '';
        link.style.fontWeight = link.getAttribute('href') === `#${id}` ? '600' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// ===== FADE IN ON SCROLL =====
const fadeItems = document.querySelectorAll('.stat-card, .card, .tl-item');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

fadeItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(16px)';
  item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  fadeObserver.observe(item);
});