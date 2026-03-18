// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Active link
const links = document.querySelectorAll('.nav-links a');
links.forEach(l => {
  const page = location.pathname.split('/').pop() || 'index.html';
  if (l.getAttribute('href') === page || l.getAttribute('href') === '../' + page) {
    l.classList.add('active');
  }
});
