// js/router.js
import { Templates } from './templates.js';
import { setupFormValidation } from './validation.js';

export class Router {
  constructor(container) {
    this.container = container;
    this.routes = {
      '#/': Templates.home,
      '#/projetos': Templates.projetos,
      '#/prato-cheio': Templates.pratoCheio,
      '#/futuro-digital': Templates.futuroDigital,
      '#/cadastro': Templates.cadastro
    };
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash || '#/';
    const renderView = this.routes[hash] || Templates.notFound;

    // Renderiza a view dinamicamente no container do main
    this.container.innerHTML = renderView();

    // Atualiza marcação de link ativo na navegação
    document.querySelectorAll('nav a.nav-link').forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Se estiver na tela de cadastro, associa os eventos de validação
    if (hash === '#/cadastro') {
      setupFormValidation();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}