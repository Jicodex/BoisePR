// Mobile menu toggle and header scroll behavior
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const header = document.querySelector('header');

function openMenu() {
  mobileNav.classList.add('show');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileNav.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', (e) => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  if (expanded) closeMenu(); else openMenu();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});

// Add small shadow to header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) header.classList.add('header-scrolled'); else header.classList.remove('header-scrolled');
});
