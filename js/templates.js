// js/templates.js

export const Templates = {
  // Tela Início (index.html original)
  home() {
    return `
      <section>
        <span class="badge badge--primary">Institucional</span>
        <h2>Nossa Missão</h2>
        <img src="img/img-home.png" alt="Voluntários da ONG sorrindo enquanto entregam alimentos para a comunidade">
        <p>Transformar vidas por meio do voluntariado e do apoio a famílias em situação de vulnerabilidade social.</p>
      </section>

      <section>
        <span class="badge badge--secondary">Engajamento</span>
        <h2>Como Ajudar</h2>
        <p>Você pode contribuir doando seu tempo como voluntário ou participando de nossas campanhas de arrecadação de alimentos e suprimentos.</p>
        <a href="#/cadastro" class="btn" style="margin-top: var(--space-4);">Quero Ser Voluntário</a>
      </section>

      <section>
        <span class="badge badge--accent">Atendimento</span>
        <h2>Contato</h2>
        <p><strong>E-mail:</strong> contato@acaosolidaria.org</p>
        <p><strong>Telefone:</strong> (11) 99999-9999</p>
        <p><strong>Endereço:</strong> Av. Principal, 1000 - Centro</p>
      </section>
    `;
  },

  // Tela de Listagem dos Projetos (projetos.html original)
  projetos() {
    return `
      <div class="initiatives-hero">
        <h2>Nossas Iniciativas</h2>
        <p class="initiatives-hero__subtitle">Conheça nossos projetos que transformam a comunidade diariamente.</p>
      </div>

      <section style="grid-column: span 12;">
        <h2>Projetos em Andamento</h2>
        
        <!-- Card do Projeto 1 -->
        <article>
          <img src="img/prato-cheio.png" alt="Voluntários preparando e distribuindo refeições para a comunidade" class="article__image">
          <div class="article__content">
            <span class="badge badge--primary">Alimentação</span>
            <h3>Prato Cheio</h3>
            <p>Projeto focado no combate à fome, realizando a arrecadação e entrega de refeições e cestas básicas para famílias em situação de vulnerabilidade.</p>
            <a href="#/prato-cheio" class="btn" style="margin-top: var(--space-4);">Saiba Mais sobre o Projeto</a>
          </div>
        </article>

        <!-- Card do Projeto 2 -->
        <article>
          <img src="img/futuro-digital.png" alt="Estudantes em sala de aula participando de curso de informática" class="article__image">
          <div class="article__content">
            <span class="badge badge--secondary">Educação & Tech</span>
            <h3>Futuro Digital</h3>
            <p>Oferece oficinas e capacitação técnica em tecnologia para jovens e adultos, preparando-os para o mercado de trabalho moderno.</p>
            <a href="#/futuro-digital" class="btn" style="margin-top: var(--space-4);">Saiba Mais sobre o Projeto</a>
          </div>
        </article>
      </section>
    `;
  },

  // Tela Detalhe: Prato Cheio (prato-cheio.html original)
  pratoCheio() {
    return `
      <section style="grid-column: span 12;">
        <span class="badge badge--primary">Segurança Alimentar</span>
        <h2>Projeto Prato Cheio</h2>
        <img src="img/prato-cheio.png" alt="Voluntários preparando e distribuindo refeições para a comunidade" style="width: 100%; max-width: 800px; height: auto; border-radius: var(--radius-md);">
        
        <p>O <strong>Projeto Prato Cheio</strong> é focado na garantia da segurança alimentar e no combate à fome em comunidades vulneráveis.</p>
        
        <h3>Como Funciona</h3>
        <p>Realizamos triagem de famílias em situação de extrema pobreza, organizamos mutirões de arrecadação e distribuímos refeições nutritivas e cestas básicas semanalmente.</p>
        
        <h3>Como Você Pode Ajudar</h3>
        <p>Precisamos de voluntários para organização logística, triagem de suprimentos, preparo de alimentos e distribuição nas comunidades atendidas.</p>

        <div style="margin-top: var(--space-6); display: flex; gap: var(--space-4); flex-wrap: wrap;">
          <a href="#/cadastro" class="btn">Quero Voluntariar neste Projeto</a>
          <a href="#/projetos" class="btn btn--secondary">Ver Outros Projetos</a>
        </div>
      </section>
    `;
  },

  // Tela Detalhe: Futuro Digital (futuro-digital.html original)
  futuroDigital() {
    return `
      <section style="grid-column: span 12;">
        <span class="badge badge--secondary">Inclusão Digital & Tech</span>
        <h2>Projeto Futuro Digital</h2>
        <img src="img/futuro-digital.png" alt="Estudantes em sala de aula participando de curso de informática" style="width: 100%; max-width: 800px; height: auto; border-radius: var(--radius-md);">
        
        <p>O <strong>Projeto Futuro Digital</strong> promove a inclusão digital e a capacitação técnica para jovens e adultos ingressarem no mercado de trabalho.</p>
        
        <h3>Como Funciona</h3>
        <p>Oferecemos cursos gratuitos de informática básica, navegação segura, ferramentas de escritório e introdução à programação em nossos laboratórios comunitários.</p>
        
        <h3>Como Você Pode Ajudar</h3>
        <p>Você pode atuar como instrutor, monitor de turmas, mentor profissional ou doando equipamentos eletrônicos para o nosso laboratório.</p>

        <div style="margin-top: var(--space-6); display: flex; gap: var(--space-4); flex-wrap: wrap;">
          <a href="#/cadastro" class="btn">Quero Voluntariar neste Projeto</a>
          <a href="#/projetos" class="btn btn--secondary">Ver Outros Projetos</a>
        </div>
      </section>
    `;
  },

  // Tela Formulário de Cadastro (cadastro.html original)
  cadastro() {
    return `
      <section class="form-container" style="grid-column: span 12;">
        <h2>Faça parte da nossa causa</h2>
        <p>Preencha o formulário abaixo para se registrar como voluntário. Os campos com * são obrigatórios.</p>

        <!-- Alerta Contextual de Feedback -->
        <div class="alert alert--success" role="alert" style="display: none;" id="feedback-alert">
          Seu cadastro foi enviado com sucesso! Dados armazenados com segurança.
        </div>

        <form id="form-cadastro" novalidate>
          <fieldset>
            <legend>Dados Pessoais</legend>

            <div class="form-group">
              <label for="nome">Nome Completo *</label>
              <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>
              <span class="error-message" id="error-nome"></span>
            </div>

            <div class="form-group">
              <label for="email">E-mail *</label>
              <input type="email" id="email" name="email" placeholder="exemplo@email.com" required>
              <span class="error-message" id="error-email"></span>
            </div>

            <div class="form-group">
              <label for="telefone">Telefone / WhatsApp *</label>
              <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
              <span class="error-message" id="error-telefone"></span>
            </div>
          </fieldset>

          <fieldset>
            <legend>Área de Interesse</legend>

            <div class="form-group">
              <label for="projeto">Escolha o Projeto de Preferência *</label>
              <select id="projeto" name="projeto" required>
                <option value="" disabled selected>Selecione um projeto...</option>
                <option value="prato-cheio">Prato Cheio (Distribuição de Alimentos)</option>
                <option value="futuro-digital">Futuro Digital (Aulas de Informática)</option>
                <option value="apoio-geral">Apoio Geral / Eventos</option>
              </select>
              <span class="error-message" id="error-projeto"></span>
            </div>

            <div class="form-group">
              <label for="mensagem">Por que você quer ser voluntário? *</label>
              <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte-nos um pouco sobre suas motivações e experiências..." required></textarea>
              <span class="error-message" id="error-mensagem"></span>
            </div>
          </fieldset>

          <!-- Aceite de Termos -->
          <div class="form-group checkbox-group">
            <label for="termos" class="checkbox-label">
              <input type="checkbox" id="termos" name="termos" required> 
              <span>
                Li e concordo com os 
                <button type="button" class="btn-link" id="btn-abrir-modal">
                  Termos de Voluntariado
                </button> *
              </span>
            </label>
            <span class="error-message" id="error-termos"></span>
          </div>

          <div class="form-actions" style="display: flex; gap: var(--space-4);">
            <button type="submit" class="btn">Enviar Cadastro</button>
            <button type="reset" class="btn btn--secondary" id="btn-reset-form">Limpar</button>
          </div>
        </form>
      </section>
    `;
  },

  // Tela Not Found
  notFound() {
    return `
      <section style="grid-column: span 12;">
        <h2>Página Não Encontrada</h2>
        <p>Desculpe, a rota acessada não existe.</p>
        <a href="#/" class="btn">Voltar ao Início</a>
      </section>
    `;
  }
};