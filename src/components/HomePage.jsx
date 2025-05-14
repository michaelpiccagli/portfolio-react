import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const HomePage = () => {
  const buttonTop = useRef(null);
  const menuMobile = useRef(null);
  
  // Função typeWriter
  const typeWriter = (element, text, delay = 100, callback) => {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      } else if (callback) {
        setTimeout(callback, 300);
      }
    }
    typing();
  };

  useEffect(() => {
    // Elementos da tela para efeito de digitação
    const p = document.querySelector(".text-home p");
    const h1 = document.querySelector(".text-home h1");
    const span = document.querySelector(".text-home span");
    const h2 = document.querySelector(".text-home h2");

    // Limpando o conteúdo para efeito de digitação
    p.innerHTML = "";
    h1.innerHTML = "";
    span.innerHTML = "";
    h2.innerHTML = "";

    // Iniciando a animação de digitação
    typeWriter(p, "Olá ✌️,", 100, function () {
      typeWriter(h1, "Meu nome é", 100, function () {
        typeWriter(span, "Michael Piccagli", 100, function () {
          typeWriter(h2, "Desenvolvedor Front-End", 100);
        });
      });
    });

    // ScrollReveal (com efeito de animação)
    const sr = ScrollReveal({ reset: true });

    sr.reveal('.text-home', { duration: 3000, origin: 'top', distance: '150px' });
    sr.reveal('.img-box', { duration: 2000, origin: 'left', distance: '150px' });
    sr.reveal('.imagem-sobre-mim', { origin: 'bottom', distance: '150px', duration: 2000 });
    sr.reveal('.informacoes-sobre-mim', { origin: 'bottom', distance: '150px', duration: 2000 });
    sr.reveal('.section-title', { origin: 'top', distance: '150px', duration: 2000 });
    sr.reveal('.container-habilidades', { origin: 'bottom', distance: '150px', duration: 2000 });
    sr.reveal('.container-projetos', { origin: 'bottom', distance: '100px', duration: 2000 });
    sr.reveal('.cards-wrapper', { origin: 'top', distance: '150px', duration: 2000 });

    // Scroll Event para exibir o botão "voltar ao topo"
    const handleScroll = () => {
      if (window.scrollY > 350) {
        buttonTop.current.classList.add('show');
      } else {
        buttonTop.current.classList.remove('show');
      }

      if (window.scrollY > 400) {
        menuMobile.current.checked = false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para o botão "voltar ao topo"
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Texto da home */}
      <div className="text-home">
        <p></p>
        <h1></h1>
        <span></span>
        <h2></h2>
      </div>

      {/* Botão de voltar ao topo */}
      <a
        id="backToTopButton"
        ref={buttonTop}
        href="#home"
        onClick={scrollToTop}
        style={{ position: 'fixed', bottom: '1rem', right: '2.5rem', opacity: 0, visibility: 'hidden', transform: 'translateY(100%)', transition: '200ms' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#00856F" />
          <path d="M20 27V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 20L20 13L27 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Menu Hamburguer */}
      <input type="checkbox" id="menu-hamburguer" ref={menuMobile} />
      {/* Outras partes da página */}
    </div>
  );
};

export default HomePage;
