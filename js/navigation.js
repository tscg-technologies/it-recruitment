/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Navigation & Header Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  // 1. Scroll-based Header Styling
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Active Page Highlighting based on pathname
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  // 3. Mobile Navigation Drawer Controls
  const toggleDrawer = (open) => {
    if (!mobileDrawer || !mobileToggle) return;
    const shouldOpen = typeof open === 'boolean' ? open : !mobileDrawer.classList.contains('open');

    if (shouldOpen) {
      mobileDrawer.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      if (mobileOverlay) mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleDrawer());
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => toggleDrawer(false));
  }

  // Close drawer on link click
  document.querySelectorAll('.mobile-drawer .nav-link, .mobile-drawer .btn').forEach(item => {
    item.addEventListener('click', () => toggleDrawer(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
});
