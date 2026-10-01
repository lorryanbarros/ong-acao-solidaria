// js/a11y.js - Melhorias de Acessibilidade (WCAG 2.1 AA)

export function initA11y() {
  // 1. Menu Toggle Responsivo com ARIA
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-active');
    });
  }

  // 2. Fechar modal com a tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('modal-termos');
      if (modal && modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
      }
    }
  });
}