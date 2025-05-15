import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const HomePage = () => {
  const pRef = useRef(null);
  const h1Ref = useRef(null);
  const spanRef = useRef(null);
  const h2Ref = useRef(null);
  const buttonTop = useRef(null);
  const menuMobile = useRef(null);

  // Função typeWriter refatorada para Promise
  const typeWriter = (element, text, delay = 100) => {
    return new Promise((resolve) => {
      let i = 0;
      element.innerHTML = ""; // limpa o conteúdo antes de começar

      function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, delay);
        } else {
          resolve();
        }
      }

      typing();
    });
  };

  useEffect(() => {
    const runTypeWriter = async () => {
      if (!pRef.current || !h1Ref.current || !spanRef.current || !h2Ref.current) return;

      await typeWriter(pRef.current, "Olá ✌️,", 100);
      await typeWriter(h1Ref.current, "Meu nome é", 100);
      await typeWriter(spanRef.current, "Michael Piccagli", 100);
      await typeWriter(h2Ref.current, "Desenvolvedor Front-End", 100);
    };

    runTypeWriter();

    const sr = ScrollReveal({ reset: true });

    sr.reveal('.text-home', { duration: 3000, origin: 'top', distance: '150px' });
    sr.reveal('.img-box', { duration: 2000, origin: 'left', distance: '150px' });
    sr.reveal('.imagem-sobre-mim', { origin: 'bottom', distance: '150px', duration: 2000 });
    sr.reveal('.informacoes-sobre-mim', { origin: 'bottom', distance: '150px', duration: 2000 });
    sr.reveal('.section-title', { origin: 'top', distance: '150px', duration: 2000 });
    sr.reveal('.container-habilidades', { origin: 'bottom', distance: '150px', duration: 2000 });
    sr.reveal('.container-projetos', { origin: 'bottom', distance: '100px', duration: 2000 });
    sr.reveal('.cards-wrapper', { origin: 'top', distance: '150px', duration: 2000 });

    const handleScroll = () => {
      if (window.scrollY > 350) {
        buttonTop.current.classList.add('show');
      } else {
        buttonTop.current.classList.remove('show');
      }

      if (window.scrollY > 400 && menuMobile.current) {
        menuMobile.current.checked = false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="text-home">
        <p ref={pRef}></p>
        <h1 ref={h1Ref}></h1>
        <span ref={spanRef}></span>
        <h2 ref={h2Ref}></h2>
      </div>

      <a
        id="backToTopButton"
        ref={buttonTop}
        href="#home"
        onClick={scrollToTop}
        className="back-to-top-btn"
        aria-label="Voltar ao topo"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#00856F" />
          <path d="M20 27V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 20L20 13L27 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <input type="checkbox" id="menu-hamburguer" ref={menuMobile} />
      {/* Resto do conteúdo da página */}
    </div>
  );
};

export default HomePage;
