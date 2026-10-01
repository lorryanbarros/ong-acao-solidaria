// js/app.js
import { Router } from './router.js';
import { initA11y } from './a11y.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  
  if (appContainer) {
    const router = new Router(appContainer);
    router.init();
  }

  // Inicializa as melhorias de acessibilidade (WCAG 2.1 AA)
  initA11y();
});