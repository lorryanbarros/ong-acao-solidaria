// js/validation.js
import { Storage } from './storage.js';

export function setupFormValidation() {
  const form = document.getElementById('form-cadastro');
  const modal = document.getElementById('modal-termos');
  const btnAbrirModal = document.getElementById('btn-abrir-modal');
  const btnFecharModal = document.getElementById('btn-fechar-modal');
  const feedbackAlert = document.getElementById('feedback-alert');
  const btnReset = document.getElementById('btn-reset-form');

  if (!form) return;

  // Lógica do Modal
  if (btnAbrirModal && modal) {
    btnAbrirModal.addEventListener('click', () => modal.classList.add('is-active'));
  }

  if (btnFecharModal && modal) {
    btnFecharModal.addEventListener('click', () => modal.classList.remove('is-active'));
  }

  if (btnReset && feedbackAlert) {
    btnReset.addEventListener('click', () => {
      feedbackAlert.style.display = 'none';
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    });
  }

  // Validação em Tempo Real e Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const telefone = form.querySelector('#telefone');
    const projeto = form.querySelector('#projeto');
    const mensagem = form.querySelector('#mensagem');
    const termos = form.querySelector('#termos');

    if (nome.value.trim().length < 3) {
      document.getElementById('error-nome').textContent = 'O nome deve ter pelo menos 3 caracteres.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.getElementById('error-email').textContent = 'Por favor, informe um e-mail válido.';
      isValid = false;
    }

    if (telefone.value.trim().length < 8) {
      document.getElementById('error-telefone').textContent = 'Informe um telefone válido.';
      isValid = false;
    }

    if (!projeto.value) {
      document.getElementById('error-projeto').textContent = 'Selecione um projeto de sua preferência.';
      isValid = false;
    }

    if (mensagem.value.trim().length < 10) {
      document.getElementById('error-mensagem').textContent = 'Por favor, escreva pelo menos 10 caracteres.';
      isValid = false;
    }

    if (!termos.checked) {
      document.getElementById('error-termos').textContent = 'Você precisa concordar com os termos para se cadastrar.';
      isValid = false;
    }

    if (isValid) {
      const formData = {
        nome: nome.value.trim(),
        email: email.value.trim(),
        telefone: telefone.value.trim(),
        projeto: projeto.value,
        mensagem: mensagem.value.trim()
      };

      Storage.saveVolunteer(formData);

      feedbackAlert.style.display = 'block';
      form.reset();
      window.scrollTo({ top: feedbackAlert.offsetTop - 100, behavior: 'smooth' });
    }
  });
}