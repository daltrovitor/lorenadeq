"use client";

import React, { useEffect } from "react";
import "./styles.css";

export default function TestPage() {
  useEffect(() => {
    // FAQ accordion javascript
    const items = document.querySelectorAll(".faq-item");
    items.forEach((item) => {
      const btn = item.querySelector(".faq-question");
      if (btn) {
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("is-open");
          
          // Close all items
          items.forEach((el) => {
            el.classList.remove("is-open");
            const q = el.querySelector(".faq-question");
            if (q) q.setAttribute("aria-expanded", "false");
          });
          
          // Open clicked if it was closed
          if (!isOpen) {
            item.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
          }
        });
      }
    });
  }, []);

  return (
    <div 
      className="new-landing-page-root"
      dangerouslySetInnerHTML={{ __html: `<div class="secao-hero">
<section class="hero-section" aria-label="Seção hero Domine a Amamentação">

  <!-- BLOCO SUPERIOR: Foto com logo sobreposta -->
  <div class="hero-photo-wrapper">
    <img
      class="hero-photo"
      src="/foto1.webp"
      alt="Mãe sorrindo segurando bebê recém-nascido"
    >

    <!-- Logo Domine a Amamentação -->
    <div class="hero-logo" role="img" aria-label="Domine a Amamentação">
      <img class="hero-logo-img" src="/logo-branco.webp" alt="Domine a Amamentação">
    </div>
  </div>

  <!-- BLOCO INFERIOR: Copy sobre fundo vinho -->
  <div class="hero-content">

    <!-- Selo -->
    <div class="hero-badge" role="note">
      <span class="hero-badge-text">Para mães que querem viver essa fase com leveza</span>
    </div>

    <!-- Headline -->
    <h1 class="hero-headline">
      Construa uma relação tranquila com seu bebê desde os primeiros dias, amamentando com confiança e sem dor
    </h1>

    <!-- Subheadline -->
    <div class="hero-sub">
      <p class="hero-sub-regular">
        A maioria das mães chega ao parto sem saber o que esperar das primeiras mamadas. Dias de dor, noites de pouco sono e aquela sensação de culpa de quem acha que está falhando.
      </p>
      <p class="hero-sub-bold">
        A boa notícia é que a maioria dessas dificuldades pode ser evitada com conhecimento adquirido do jeito certo.
      </p>
    </div>

  </div>

</section>
</div>

<div class="secao-hero-cta">
<section class="hero-cta" aria-label="Benefícios e chamada para ação">
    <p class="hero-cta__subtitle">
      Com o aprendizado do Domine a Amamentação, você vai conseguir:
    </p>

    <ul class="hero-cta__bullets">
      <li class="hero-cta__bullet">
        <span class="hero-cta__bullet-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </span>
        <p class="hero-cta__bullet-text">
          Sentir confiança para amamentar, sabendo o que é normal e o que precisa de atenção desde os primeiros dias, ainda na maternidade.
        </p>
      </li>

      <li class="hero-cta__bullet">
        <span class="hero-cta__bullet-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </span>
        <p class="hero-cta__bullet-text">
          Reduzir o choro causado pela pega incorreta na mamada, atravessando os primeiros dias sem as dores que fazem tantas mães desistirem do seu grande sonho.
        </p>
      </li>

      <li class="hero-cta__bullet">
        <span class="hero-cta__bullet-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </span>
        <p class="hero-cta__bullet-text">
          Construir uma relação tranquila e harmoniosa com seu bebê, guardando memórias afetivas positivas dessa fase tão especial.
        </p>
      </li>
    </ul>

    <a href="https://pay.hotmart.com/C56596063W?checkoutMode=10&bid=1784245155404" class="hero-cta__button" role="button" aria-label="Quero aprender a amamentar">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      QUERO APRENDER A AMAMENTAR
    </a>

    <p class="hero-cta__badges" aria-label="Segurança de compra">
      COMPRA SEGURA 🔒 · ACESSO POR 1 ANO · 7 DIAS DE GARANTIA ✓
    </p>
  </section>
</div>

<div class="secao-comparacao">
<section class="comparacao-section" aria-labelledby="comparacao-titulo">

    <header class="comparacao-header">
      <span class="comparacao-selo">A diferença está no preparo</span>
      <h2 class="comparacao-titulo" id="comparacao-titulo">
        O que muda quando você<br>chega preparada
      </h2>
      <div class="comparacao-intro">
        <p>A amamentação que você imaginou é possível. O que separa uma experiência tranquila de outra frustrante e exaustiva, na maioria dos casos, é ter as informações certas no momento certo, antes do parto.</p>
        <p>E o melhor ainda: você pode relembrar o que for preciso, de forma prática e clara, sempre que houver qualquer dúvida ou insegurança.</p>
      </div>
    </header>

    <ul class="comparacao-lista" role="list">

      <!-- Card 1 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Primeira mamada após o nascimento</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Chega sabendo o que fazer e coloca em prática desde a primeira vez.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Espera alguém ter tempo para ensinar na correria da maternidade.</p>
          </div>
        </div>
      </li>

      <!-- Card 2 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Dor e fissuras nos mamilos</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Identifica a causa, corrige a pega e sabe o que deve ou não aplicar.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Aguenta a dor contando os segundos para a mamada terminar, ou pensando em desistir a qualquer momento.</p>
          </div>
        </div>
      </li>

      <!-- Card 3 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Peito empedrado de madrugada</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Segue o protocolo em casa e resolve em minutos.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Acorda todo mundo ou corre ao pronto-socorro às 3h.</p>
          </div>
        </div>
      </li>

      <!-- Card 4 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Mastite</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Sabe o que fazer e continua amamentando com segurança.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Para de amamentar por medo, muitas vezes sem necessidade.</p>
          </div>
        </div>
      </li>

      <!-- Card 5 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Bebê chorando após mamar</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Lê os sinais e entende o que está acontecendo de verdade.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Interpreta como leite fraco e complementa com fórmula.</p>
          </div>
        </div>
      </li>

      <!-- Card 6 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Medo de leite insuficiente</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Sabe interpretar os sinais de saciedade e hidratação do bebê.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Vive em dúvida se o bebê está cheio ou se precisa mamar mais.</p>
          </div>
        </div>
      </li>

      <!-- Card 7 -->
      <li class="comparacao-card">
        <p class="comparacao-card__situacao">Noites sem dormir e cansaço extremo</p>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-check" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.5L9 17L18 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--com">Com Domine a Amamentação</span>
            <p class="comparacao-row__texto comparacao-row__texto--com">Dorme confiante e em paz, sabendo que o bebê está bem alimentado.</p>
          </div>
        </div>
        <div class="comparacao-divider" role="separator"></div>
        <div class="comparacao-row">
          <svg class="comparacao-row__icon icon-x" viewBox="0 0 22 22" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
          <div class="comparacao-row__content">
            <span class="comparacao-row__label comparacao-row__label--sem">Sem conhecimento</span>
            <p class="comparacao-row__texto comparacao-row__texto--sem">Vira noites em claro, dando o peito toda vez que o bebê chora.</p>
          </div>
        </div>
      </li>

    </ul>
  </section>
</div>

<div class="secao-metodo">
<section class="metodo-section" aria-label="Método: 3 passos para amamentar com confiança e sem dor">

    <h2 class="metodo-heading">
      3 passos para amamentar com<br>
      <em>confiança e sem dor</em>
    </h2>

    <div class="metodo-heart" aria-hidden="true">
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 13.5C8 13.5 1 8.5 1 4C1 2.067 2.567 0.5 4.5 0.5C5.88 0.5 7.08 1.26 7.72 2.38C7.83 2.57 7.92 2.77 8 2.98C8.08 2.77 8.17 2.57 8.28 2.38C8.92 1.26 10.12 0.5 11.5 0.5C13.433 0.5 15 2.067 15 4C15 8.5 8 13.5 8 13.5Z" fill="#c06080"/>
      </svg>
    </div>

    <div class="metodo-cards">

      <!-- Card 01 — Preparar -->
      <article class="metodo-card" aria-label="Passo 01: Preparar">
        <div class="metodo-card-icon" aria-hidden="true">
          <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Página esquerda do livro -->
            <path d="M32 10 C32 10 16 8 8 12 L8 46 C16 42 32 44 32 44 L32 10Z" stroke="#c06080" stroke-width="2" stroke-linejoin="round" fill="none"/>
            <!-- Página direita do livro -->
            <path d="M32 10 C32 10 48 8 56 12 L56 46 C48 42 32 44 32 44 L32 10Z" stroke="#c06080" stroke-width="2" stroke-linejoin="round" fill="none"/>
            <!-- Linha central do livro -->
            <line x1="32" y1="10" x2="32" y2="44" stroke="#c06080" stroke-width="1.5"/>
            <!-- Coração na página direita -->
            <path d="M38 24 C38 22.5 39.2 21.5 40.5 21.5 C41.3 21.5 42 21.9 42.4 22.6 C42.8 21.9 43.5 21.5 44.3 21.5 C45.6 21.5 46.8 22.5 46.8 24 C46.8 26.5 42.4 29 42.4 29 C42.4 29 38 26.5 38 24Z" stroke="#c06080" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="metodo-card-label">
          <span class="metodo-card-number">01</span>
          <span class="metodo-card-title">Preparar</span>
        </div>
        <p class="metodo-card-body">
          Assista às aulas durante a gestação e chegue ao parto sabendo exatamente como conduzir a primeira mamada.
        </p>
      </article>

      <!-- Card 02 — Aplicar -->
      <article class="metodo-card" aria-label="Passo 02: Aplicar">
        <div class="metodo-card-icon" aria-hidden="true">
          <svg width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Cabeça da mãe -->
            <circle cx="28" cy="10" r="6" stroke="#c06080" stroke-width="2" fill="none"/>
            <!-- Corpo da mãe -->
            <path d="M16 26 C16 20 20 18 28 18 C36 18 40 20 40 26 L40 36 C40 40 36 44 32 44 L24 44 C20 44 16 40 16 36 Z" stroke="#c06080" stroke-width="2" fill="none" stroke-linejoin="round"/>
            <!-- Cabeça do bebê -->
            <circle cx="28" cy="33" r="5" stroke="#c06080" stroke-width="1.8" fill="none"/>
            <!-- Braço esquerdo abraçando -->
            <path d="M16 26 C14 28 13 30 14 34 C15 37 18 39 22 40" stroke="#c06080" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <!-- Braço direito abraçando -->
            <path d="M40 26 C42 28 43 30 42 34 C41 37 38 39 34 40" stroke="#c06080" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="metodo-card-label">
          <span class="metodo-card-number">02</span>
          <span class="metodo-card-title">Aplicar</span>
        </div>
        <p class="metodo-card-body">
          Aprenda a pega correta, posicionamento e interpretação dos sinais do bebê desde as primeiras horas de vida.
        </p>
      </article>

      <!-- Card 03 — Sustentar -->
      <article class="metodo-card" aria-label="Passo 03: Sustentar">
        <div class="metodo-card-icon" aria-hidden="true">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Círculo da lupa -->
            <circle cx="24" cy="24" r="14" stroke="#c06080" stroke-width="2" fill="none"/>
            <!-- Cabo da lupa -->
            <line x1="34" y1="34" x2="52" y2="52" stroke="#c06080" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Coração dentro da lupa -->
            <path d="M18.5 22.5 C18.5 21.1 19.6 20 21 20 C21.8 20 22.5 20.4 24 21.8 C25.5 20.4 26.2 20 27 20 C28.4 20 29.5 21.1 29.5 22.5 C29.5 25.5 24 29 24 29 C24 29 18.5 25.5 18.5 22.5Z" stroke="#c06080" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="metodo-card-label">
          <span class="metodo-card-number">03</span>
          <span class="metodo-card-title">Sustentar</span>
        </div>
        <p class="metodo-card-body">
          Tenha acesso rápido às orientações necessárias para resolver os desafios mais comuns da amamentação.
        </p>
      </article>

    </div>
  </section>
</div>

<div class="secao-modulos">
<section class="modulos-section" aria-labelledby="modulos-titulo">
    <h2 class="modulos-titulo" id="modulos-titulo">
      O que você vai<br><em>aprender</em>
    </h2>

    <div class="modulos-grade">

      <!-- Módulo 1: Calendário -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <line x1="8" y1="14" x2="8" y2="14" stroke-linecap="round" stroke-width="2"/>
            <line x1="12" y1="14" x2="12" y2="14" stroke-linecap="round" stroke-width="2"/>
            <line x1="16" y1="14" x2="16" y2="14" stroke-linecap="round" stroke-width="2"/>
            <line x1="8" y1="18" x2="8" y2="18" stroke-linecap="round" stroke-width="2"/>
            <line x1="12" y1="18" x2="12" y2="18" stroke-linecap="round" stroke-width="2"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 1</span>
          <span class="modulo-nome">Preparação para o nascimento</span>
        </div>
      </div>

      <!-- Módulo 2: Rosto de bebê -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 9.5c0-.28.22-.5.5-.5s.5.22.5.5"/>
            <path d="M14 9.5c0-.28.22-.5.5-.5s.5.22.5.5"/>
            <path d="M8.5 14.5c1 1.5 5.5 1.5 6.5 0"/>
            <path d="M9 4.5C7 5.5 5.5 7 4.5 9"/>
            <path d="M15 4.5C17 5.5 18.5 7 19.5 9"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 2</span>
          <span class="modulo-nome">Primeira mamada</span>
        </div>
      </div>

      <!-- Módulo 3: Coração -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 3</span>
          <span class="modulo-nome">Pega correta</span>
        </div>
      </div>

      <!-- Módulo 4: Duas pessoas -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="7" r="3"/>
            <path d="M3 20v-2a5 5 0 0 1 5-5h2"/>
            <circle cx="17" cy="7" r="3"/>
            <path d="M21 20v-2a5 5 0 0 0-4-4.9"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 4</span>
          <span class="modulo-nome">Posicionamentos</span>
        </div>
      </div>

      <!-- Módulo 5: Rosto com expressão -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <path d="M8 13.5s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9.5" x2="9.01" y2="9.5" stroke-width="2.5"/>
            <line x1="15" y1="9.5" x2="15.01" y2="9.5" stroke-width="2.5"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 5</span>
          <span class="modulo-nome">Sinais do bebê</span>
        </div>
      </div>

      <!-- Módulo 6: Gota d'água -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 6</span>
          <span class="modulo-nome">Fissuras e rachaduras</span>
        </div>
      </div>

      <!-- Módulo 7: Estetoscópio -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 6.5a2 2 0 0 1 4 0v6a4.5 4.5 0 0 0 9 0v-1"/>
            <circle cx="17.5" cy="10.5" r="2.5"/>
            <line x1="6.5" y1="3" x2="6.5" y2="5"/>
            <line x1="4.5" y1="3" x2="4.5" y2="5"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 7</span>
          <span class="modulo-nome">Ingurgitamento</span>
        </div>
      </div>

      <!-- Módulo 8: Escudo -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2l7 3v6c0 4.5-3.5 8.5-7 10C8.5 19.5 5 15.5 5 11V5l7-3z"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 8</span>
          <span class="modulo-nome">Mastite</span>
        </div>
      </div>

      <!-- Módulo 9: Onda/gota subindo (Regurgitações) -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 19V5"/>
            <path d="M8 9l4-4 4 4"/>
            <path d="M7 17c0 1.1.9 2 5 2s5-.9 5-2"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 9</span>
          <span class="modulo-nome">Regurgitações</span>
        </div>
      </div>

      <!-- Módulo 10: Seta circular (Refluxo) -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9"/>
            <path d="M21 3v9h-9"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 10</span>
          <span class="modulo-nome">Refluxo</span>
        </div>
      </div>

      <!-- Módulo 11: Gota com fluxo (Ordenha) -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3C12 3 6 10 6 14.5a6 6 0 0 0 12 0C18 10 12 3 12 3z"/>
            <path d="M9 18l3 3 3-3"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 11</span>
          <span class="modulo-nome">Ordenha</span>
        </div>
      </div>

      <!-- Módulo 12: Coração com laço (Desmame) -->
      <div class="modulo-card">
        <div class="modulo-icone-circulo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c45c7a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            <path d="M12 5.67c0 0 0-2.5 2-2.5"/>
            <path d="M14 3.17c.5-.5 1.5-.5 1.5.5s-1 1-1 2"/>
          </svg>
        </div>
        <div class="modulo-texto">
          <span class="modulo-label">Módulo 12</span>
          <span class="modulo-nome">Desmame</span>
        </div>
      </div>

    </div>
  </section>
</div>

<div class="secao-prova-dados">
<section class="prova-dados" aria-labelledby="prova-dados-titulo">
    <div class="prova-dados__inner">

      <header class="prova-dados__header">
        <span class="prova-dados__badge" aria-hidden="true">Por que isso importa agora</span>
        <h2 class="prova-dados__titulo" id="prova-dados-titulo">
          O desafio é maior do que parece,<br>
          e a maioria enfrenta <em>sozinha</em>
        </h2>
        <p class="prova-dados__intro">
          Você não está sozinha nessa dificuldade. Os números mostram um problema estrutural, não uma falha pessoal.
        </p>
      </header>

      <div class="prova-dados__grid" role="list">

        <article class="stat-card" role="listitem">
          <div class="stat-card__numero" aria-label="45,8 por cento">45,8%</div>
          <p class="stat-card__desc">das crianças brasileiras são amamentadas exclusivamente até os 6 meses. A meta do Brasil é chegar a 70% até 2030.</p>
          <span class="stat-card__fonte">ENANI, 2021</span>
        </article>

        <article class="stat-card" role="listitem">
          <div class="stat-card__numero" aria-label="96 por cento">96%</div>
          <p class="stat-card__desc">das mães relatam algum desconforto nos primeiros meses. A pega incorreta é a causa mais citada.</p>
          <span class="stat-card__fonte">Ministério da Saúde / OMS</span>
        </article>

        <article class="stat-card" role="listitem">
          <div class="stat-card__numero" aria-label="1,6 milhão">1,6 mi</div>
          <p class="stat-card__desc">de atendimentos de apoio à amamentação pelo SUS em 2023. As mães buscam ajuda, mas o sistema público não comporta a demanda.</p>
          <span class="stat-card__fonte">Ministério da Saúde, 2023</span>
        </article>

        <article class="stat-card" role="listitem">
          <div class="stat-card__numero" aria-label="15 dias">15 dias</div>
          <p class="stat-card__desc">é o período crítico de abandono da amamentação. Mães que atravessam essa fase com informação têm alta probabilidade de amamentar pelo tempo que desejam.</p>
          <span class="stat-card__fonte">OMS</span>
        </article>

      </div>

      <p class="prova-dados__footnote">Fontes: ENANI/2021, Ministério da Saúde e OMS.</p>

      <header class="prova-dados__depo-header">
        <span class="prova-dados__depo-badge" aria-hidden="true">Quem já viveu isso</span>
      </header>

      <div class="depo-grid" role="list">

        <article class="depo-card" role="listitem">
          <img class="depo-card__print" src="assets/depoimento-bruna.jpg" alt="Print de conversa de WhatsApp de Bruna, mãe da Georgia, agradecendo o acompanhamento da Dra. Lorena e contando que ele a ajudou a não desistir de amamentar nos primeiros meses.">
        </article>

        <article class="depo-card" role="listitem">
          <img class="depo-card__print" src="assets/depoimento-maria-augusta.jpg" alt="Print de conversa de WhatsApp de Maria Augusta agradecendo a disponibilidade, o acolhimento e o carinho da Dra. Lorena desde o primeiro contato.">
        </article>

        <article class="depo-card" role="listitem">
          <img class="depo-card__print" src="assets/depoimento-maria-augusta-2.jpg" alt="Print de conversa de WhatsApp de Maria Augusta agradecendo o cuidado com os filhos e dizendo que sua maternidade é mais leve por poder contar com a Dra. Lorena.">
        </article>

      </div>

    </div>
  </section>
</div>

<div class="secao-autoridade">
<section class="autoridade-secao" aria-label="Sobre a especialista">
    <div class="autoridade-foto-wrapper">
      <img
        class="autoridade-foto"
        src="/foto2.webp"
        alt="Foto da Dra. Lorena Caramaschi, médica pediatra"
        width="700"
        height="900"
      >
    </div>

    <div class="autoridade-corpo">
      <span class="autoridade-selo">Quem irá te acompanhar</span>

      <h2 class="autoridade-nome">Dra. Lorena Caramaschi</h2>

      <p class="autoridade-credencial">Médica Pediatra</p>
      <p class="autoridade-credencial">CRM/GO 20.882 &middot; RQE 12.917</p>

      <div class="autoridade-divider" aria-hidden="true"></div>

      <div class="autoridade-bio">
        <p>Me formei em medicina em 2016 e há 7 anos cuido de crianças e das suas famílias na Pediatria. Sou mãe de dois, vivi na pele os desafios da amamentação e posso te ajudar de duas formas: como mãe que também já passou por isso e como médica pediatra que já ajudou centenas de mães a superarem as dificuldades dessa fase, vivendo uma maternidade mais leve e segura.</p>

        <p>No consultório, eu via um padrão que se repetia toda semana. Mães chegavam nos primeiros dias após o parto absolutamente perdidas, exaustas, emocionalmente esgotadas, cheias de dúvidas que ninguém havia explicado direito.</p>

        <p>Saíam da maternidade com um bebê no colo e uma lista de perguntas que precisavam descobrir sozinhas, na maioria das vezes no meio da madrugada, com muito choro no pé do ouvido.</p>

        <p>O Domine a Amamentação nasceu dessa observação. Quero que você chegue ao parto tranquila, sabendo o que fazer e como fazer, sem depender de alguém na correria da maternidade para te ensinar a pega com calma (ou muitas vezes, infelizmente, mais atrapalhar do que ajudar).</p>
      </div>
    </div>
  </section>
</div>

<div class="secao-entregaveis">
<section class="entregaveis-section" aria-labelledby="entregaveis-heading">
  <div class="entregaveis-inner">

    <span class="entregaveis-badge">o que está incluído</span>

    <h2 class="entregaveis-title" id="entregaveis-heading">
      Tudo que <em>você recebe</em>
    </h2>

    <ul class="entregaveis-list" role="list">

      <!-- Card 1 — Videoaulas -->
      <li class="entregavel-card">
        <div class="entregavel-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#9C2E45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10,8 16,12 10,16" fill="#9C2E45" stroke="#9C2E45" stroke-width="1.2"/>
          </svg>
        </div>
        <div class="entregavel-body">
          <p class="entregavel-card-title">15 videoaulas do Método Domine a Amamentação</p>
          <p class="entregavel-card-desc">Para assistir na gestação e revisitar sempre que precisar.</p>
        </div>
      </li>

      <!-- Card 2 — Bônus Ordenha -->
      <li class="entregavel-card">
        <div class="entregavel-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#9C2E45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0 0 14 0C19 9.5 12 2 12 2z"/>
          </svg>
        </div>
        <div class="entregavel-body">
          <span class="entregavel-tag">Bônus PDF</span>
          <p class="entregavel-card-title">Ordenha</p>
          <p class="entregavel-card-desc">Tipos e técnicas de ordenha, e como armazenar o leite ordenhado da forma correta.</p>
        </div>
      </li>

      <!-- Card 3 — Bônus A mãe que amamenta -->
      <li class="entregavel-card">
        <div class="entregavel-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#9C2E45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div class="entregavel-body">
          <span class="entregavel-tag">Bônus PDF</span>
          <p class="entregavel-card-title">A mãe que amamenta</p>
          <p class="entregavel-card-desc">Cuidados com medicamentos e alimentação durante a amamentação.</p>
        </div>
      </li>

      <!-- Card 4 — Bônus Desmame -->
      <li class="entregavel-card">
        <div class="entregavel-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#9C2E45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 0 0 5 21c4-1 8.5-4.5 11-8"/>
            <path d="M21 3c-4 1-8 4-10 8"/>
            <path d="M3 21c2-2 4-5 6-8"/>
          </svg>
        </div>
        <div class="entregavel-body">
          <span class="entregavel-tag">Bônus PDF</span>
          <p class="entregavel-card-title">Desmame</p>
          <p class="entregavel-card-desc">Orientações para que o processo de desmame aconteça da forma mais natural para mãe e bebê.</p>
        </div>
      </li>

    </ul>
  </div>
</section>
</div>

<div class="secao-oferta">
<section class="oferta-secao" aria-label="Oferta final — Domine a Amamentação">

  <span class="oferta-selo">A Oportunidade Completa</span>

  <h2 class="oferta-titulo">
    Amamentar com confiança e<br>
    sem dor desde os primeiros<br>
    dias
  </h2>

  <p class="oferta-intro">
    Tudo o que você precisa para atravessar as primeiras semanas de amamentação com orientação médica detalhada e linguagem clara, didática e acolhedora.
  </p>
  <p class="oferta-intro-complemento">
    O melhor que você pode fazer pelo seu bebê agora é chegar preparada.
  </p>

  <div class="oferta-card" role="region" aria-label="Detalhes da oferta">

    <ul class="oferta-stack-lista">
      <li class="oferta-stack-item">
        <span class="oferta-check" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L7 13.5L15 5.5" stroke="#4caf50" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="oferta-item-nome">Domine a Amamentação (15 videoaulas)</span>
        <span class="oferta-item-preco">R$ 247</span>
      </li>

      <li class="oferta-stack-item">
        <span class="oferta-check" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L7 13.5L15 5.5" stroke="#4caf50" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="oferta-item-nome">Bônus: Ordenha (PDF)</span>
        <span class="oferta-item-preco">R$ 49</span>
      </li>

      <li class="oferta-stack-item">
        <span class="oferta-check" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L7 13.5L15 5.5" stroke="#4caf50" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="oferta-item-nome">Bônus: A mãe que amamenta (PDF)</span>
        <span class="oferta-item-preco">R$ 39</span>
      </li>

      <li class="oferta-stack-item">
        <span class="oferta-check" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L7 13.5L15 5.5" stroke="#4caf50" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="oferta-item-nome">Bônus: Desmame (PDF)</span>
        <span class="oferta-item-preco">R$ 49</span>
      </li>
    </ul>

    <div class="oferta-total-row" aria-label="Total dos itens sem desconto">
      <span class="oferta-total-label">Total dos itens</span>
      <span class="oferta-total-valor" aria-label="De R$ 384">R$ 384</span>
    </div>

    <div class="oferta-preco-bloco">
      <p class="oferta-de-por">De R$ 384 por apenas</p>
      <div class="oferta-preco-linha">
        <span class="oferta-preco-valor" aria-label="97 reais">R$ 97</span>
        <span class="oferta-preco-avista">à vista</span>
      </div>
      <p class="oferta-parcelamento">ou em até 12x de R$ 10,03</p>
    </div>

    <hr class="oferta-divisor-cta" aria-hidden="true">

    <a href="https://pay.hotmart.com/C56596063W?checkoutMode=10&bid=1784245155404" class="oferta-botao" role="button" aria-label="Quero obter essa oferta">
      <span class="oferta-botao-icone" aria-hidden="true">♥</span>
      QUERO OBTER ESSA OFERTA
    </a>

    <div class="oferta-badges" aria-label="Garantias de compra">
      <span>🔒 COMPRA SEGURA</span>
      <span class="oferta-badge-sep">·</span>
      <span>ACESSO POR 1 ANO</span>
      <span class="oferta-badge-sep">·</span>
      <span>7 DIAS DE GARANTIA ✓</span>
    </div>

  </div>

</section>
</div>

<div class="secao-garantia">
<section class="garantia-section" aria-label="Garantia incondicional">
    <div class="garantia-wrapper">

      <!-- Ícone de escudo acima do card -->
      <div class="garantia-icon-wrap" aria-hidden="true">
        <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <!-- Escudo -->
          <path d="M21 2L4 9v10c0 10.5 7.3 20.3 17 23 9.7-2.7 17-12.5 17-23V9L21 2z" fill="#f4d0d7" stroke="#c97a8a" stroke-width="2" stroke-linejoin="round"/>
          <!-- Checkmark -->
          <polyline points="13,22 19,28 30,17" stroke="#c97a8a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>

      <!-- Card principal -->
      <div class="garantia-card">
        <span class="garantia-eyebrow">Sem risco para você</span>

        <h2 class="garantia-titulo">
          Garantia incondicional<br>de 7 dias
        </h2>

        <p class="garantia-texto">
          O conteúdo do Domine a Amamentação aumenta muito a sua probabilidade de sucesso porque a maioria das dificuldades tem causa técnica e é totalmente evitável com conhecimento e informação de qualidade.
        </p>

        <p class="garantia-texto">
          Mas se nos primeiros 7 dias você sentir que o conteúdo não está ajudando, a garantia cobre reembolso de 100% do investimento, sem burocracia.
        </p>
      </div>

    </div>
  </section>
</div>

<div class="secao-faq">
<section class="faq-section" aria-labelledby="faq-heading">
    <div class="faq-container">
      <span class="faq-label">Tire suas dúvidas</span>
      <h2 class="faq-title" id="faq-heading">Dúvidas antes de decidir</h2>

      <ul class="faq-list" role="list">

        <li class="faq-item" id="faq-1">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-1"
          >
            <span class="faq-question-text">Por quanto tempo terei acesso ao conteúdo?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-1" role="region" aria-labelledby="faq-btn-1">
            <p class="faq-answer">O acesso é por 1 ano a partir da data da compra. Você pode assistir às videoaulas quantas vezes quiser durante esse período e baixar os PDFs bônus para guardar permanentemente.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-2">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-2"
          >
            <span class="faq-question-text">Consigo acessar pelo celular?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-2" role="region">
            <p class="faq-answer">Sim. O conteúdo fica disponível na área de membros da Hotmart, que tem aplicativo para iOS e Android. Você acessa pelo celular, tablet ou computador, onde for mais prático.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-3">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-3"
          >
            <span class="faq-question-text">Posso comprar durante a gravidez e usar depois do parto?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-3" role="region">
            <p class="faq-answer">Exatamente como o Método Domine foi pensado para funcionar. Você assiste durante a gestação para chegar preparada, e depois revisita as aulas específicas quando surgir qualquer dúvida no puerpério.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-4">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-4"
          >
            <span class="faq-question-text">O conteúdo serve para quem está tendo dificuldade agora?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-4" role="region">
            <p class="faq-answer">Sim. As aulas foram organizadas para funcionar tanto como preparo antes do parto quanto como protocolo de consulta durante o puerpério. Se você está enfrentando fissura, ingurgitamento ou insegurança sobre leite suficiente, há uma aula específica para cada situação.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-5">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-5"
          >
            <span class="faq-question-text">E se eu não conseguir amamentar mesmo com o curso?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-5" role="region">
            <p class="faq-answer">O conteúdo aumenta muito a probabilidade de sucesso porque a maioria das dificuldades tem causa técnica e tem protocolo. Mas se após 7 dias você sentir que o conteúdo não está ajudando, a garantia cobre 100% do reembolso, sem burocracia.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-6">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-6"
          >
            <span class="faq-question-text">Como funciona a garantia de 7 dias?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-6" role="region">
            <p class="faq-answer">Se em 7 dias a partir da compra você não estiver satisfeita, basta acessar a plataforma Hotmart e solicitar o reembolso. O processo é simples, automatizado e sem necessidade de justificativa. O valor é devolvido integralmente.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-7">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-7"
          >
            <span class="faq-question-text">O curso ensina sobre mastite? Posso amamentar enquanto estou com mastite?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-7" role="region">
            <p class="faq-answer">Sim, há uma aula dedicada às intercorrências, que explica sobre a mastite com detalhes: o que é, como identificar, como evitar, quando amamentar ou não amamentar e quando procurar atendimento médico.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-8">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-8"
          >
            <span class="faq-question-text">Tenho uma filha de 2 meses com dificuldade na pega. Ainda dá para corrigir?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-8" role="region">
            <p class="faq-answer">Sim. A pega pode ser corrigida em qualquer fase da amamentação. O processo pode levar alguns dias de ajuste, mas é ensinável.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-9">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-9"
          >
            <span class="faq-question-text">A plataforma é segura para pagamento?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-9" role="region">
            <p class="faq-answer">Sim. O pagamento é processado pela Hotmart, uma das maiores plataformas de infoprodutos do Brasil, com criptografia de dados e opções de pagamento via cartão, boleto e Pix.</p>
          </div>
        </li>

        <li class="faq-item" id="faq-10">
          <button
            class="faq-question"
            aria-expanded="false"
            aria-controls="faq-answer-10"
          >
            <span class="faq-question-text">Posso baixar as videoaulas para assistir sem internet?</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-answer-wrapper" id="faq-answer-10" role="region">
            <p class="faq-answer">O aplicativo da Hotmart permite download das aulas para assistir offline. Os PDFs bônus podem ser baixados e salvos no celular ou computador.</p>
          </div>
        </li>

      </ul>

      <div class="faq-cta-wrapper">
        <a href="https://pay.hotmart.com/C56596063W?checkoutMode=10&bid=1784245155404" class="faq-cta-btn" aria-label="Quero aprender a amamentar">
          <svg class="faq-cta-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          QUERO APRENDER A AMAMENTAR
        </a>
      </div>
    </div>
  </section>
</div>

<div class="secao-footer">
<footer class="footer-domine" role="contentinfo">

    <!-- Bloco do logo -->
    <div class="footer-logo-block">
      <svg class="footer-logo-icon" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Círculo acima do coração (símbolo de amamentação) -->
        <circle cx="30" cy="6" r="6" fill="white"/>
        <!-- Linha de conexão -->
        <line x1="30" y1="12" x2="30" y2="17" stroke="white" stroke-width="1.5"/>
        <!-- Coração -->
        <path d="M30 62 C30 62 6 46 6 30 C6 21.16 13.16 14 22 14 C25.5 14 28.7 15.3 30 17 C31.3 15.3 34.5 14 38 14 C46.84 14 54 21.16 54 30 C54 46 30 62 30 62Z" fill="white"/>
      </svg>

      <p class="footer-logo-dots">&middot;DOMINE&middot;</p>
      <p class="footer-logo-script">Amamentação</p>
    </div>

    <!-- Bloco da médica -->
    <div class="footer-doctor-block">
      <p class="footer-doctor-name">Dra. Lorena Caramaschi</p>
      <p class="footer-credentials">Médica Pediatra &nbsp;&middot;&nbsp; CRM/GO 20.882 &nbsp;&middot;&nbsp; RQE 12.917</p>
    </div>

    <!-- Copyright -->
    <p class="footer-copyright">© 2026 Domine a Amamentação. Todos os direitos reservados.</p>

  </footer>
</div>

` }} 
    />
  );
}
