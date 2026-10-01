# 🤝 ONG Ação Solidária — Plataforma Web

> Aplicação web responsiva e acessível desenvolvida como Single Page Application (SPA) para gestão de voluntários e divulgação de projetos sociais da ONG Ação Solidária.

[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-blue)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📌 Índice
- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Arquitetura e Tecnologias](#-arquitetura-e-tecnologias)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Acessibilidade (WCAG 2.1 AA)](#-acessibilidade-wcag-21-aa)
- [Estratégia de Versionamento (GitFlow)](#-estratégia-de-versionamento-gitflow)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Deploy em Produção](#-deploy-em-produção)
- [Licença](#-licença)

---

## 👁️ Visão Geral

O projeto consiste numa plataforma desenvolvida para conectar voluntários aos projetos de apoio comunitário ("Prato Cheio" e "Futuro Digital"). O sistema funciona como uma **Single Page Application (SPA)** nativa, proporcionando navegação rápida, persistência de dados local e validação de formulários em tempo real.

---

## ✨ Funcionalidades Principais

- **Navegação Dinâmica por Router (SPA):** Troca de vistas instantânea utilizando navegação por *hash* (`#/`, `#/projetos`, `#/cadastro`), mantendo o histórico do navegador.
- **Formulário Dinâmico de Inscrição:** Campo de cadastro de voluntários com validações síncronas de e-mail, telefone e aceitação de termos.
- **Persistência de Dados (`LocalStorage`):** Gravação e recuperação local das candidaturas efetuadas.
- **Interface Responsiva:** Design adaptável para 5 *breakpoints* distintos (smartphones, tablets e desktops).
- **Acessibilidade Completa:** Conformidade com as normas WCAG 2.1 Nível AA.

---

## 🛠️ Arquitetura e Tecnologias

- **HTML5 Semântico:** Estruturação através de tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<fieldset>`).
- **CSS3 Moderno:** Arquitetura baseada em *Design Tokens* (Custom Properties), Flexbox, CSS Grid e media queries.
- **JavaScript (ES6+ Modules):** Arquitetura modular sem frameworks externos.
  - `app.js`: Ponto de entrada da aplicação.
  - `router.js`: Gestor de rotas e navegação.
  - `templates.js`: Renderização de componentes dinâmicos.
  - `storage.js`: Camada de abstração do `localStorage`.
  - `validation.js`: Módulo de validação dos campos de formulário.
  - `a11y.js`: Melhorias de acessibilidade e manipulação de estado ARIA.

---

## 📁 Estrutura do Repositório

```text
/
├── index.html           # Arquivo HTML principal da SPA
├── cadastro.html        # Página estática complementar
├── futuro-digital.html  # Página estática detalhe de projeto
├── prato-cheio.html     # Página estática detalhe de projeto
├── projetos.html        # Página estática de listagem
├── styles.css           # Estilos globais e Design Tokens
├── README.md            # Documentação técnica do projeto
├── js/
│   ├── a11y.js          # Módulo de acessibilidade
│   ├── app.js           # Inicialização da aplicação
│   ├── router.js        # Motor de roteamento SPA
│   ├── storage.js       # Camada de manipulação de dados local
│   ├── templates.js     # Templates HTML em JavaScript
│   └── validation.js    # Módulo de validação de formulários
└── img/                 # Recursos visuais e imagens