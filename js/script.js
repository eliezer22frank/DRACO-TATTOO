function toggleMenu() {
  const navbarLinks = document.querySelector('header nav');
  navbarLinks.classList.toggle('active');
  
  // Toggle aria-expanded attribute for accessibility
  const menuButton = document.querySelector('.menu-toggle');
  const isExpanded = navbarLinks.classList.contains('active');
  menuButton.setAttribute('aria-expanded', isExpanded);
}