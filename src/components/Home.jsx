// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/home.css';
import imgProfile from '../assets/img/michael-1.jpg';

const Home = () => {
  const menuMobile = useRef(null);

  useEffect(() => {
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
      if (window.scrollY > 400 && menuMobile.current) {
        menuMobile.current.checked = false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="text-home">
            <p className="no-select">Olá ✌️,</p>
            <h1 className="no-select">Meu nome é</h1>
            <span className="no-select">Michael Piccagli</span>
            <h2 className="no-select">Desenvolvedor Front-end</h2>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/michaelpiccagli" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in no-select"></i>
              </a>
              <a href="https://wa.me/5511947376865" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp no-select"></i>
              </a>
              <a href="https://github.com/michaelpiccagli" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github no-select"></i>
              </a>
              <a href="https://www.instagram.com/michael_piccagli/" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram no-select"></i>
              </a>
            </div>
          </div>

          <div className="img-home no-select">
            <div className="img-box">
              <img src={imgProfile} alt="Michael Piccagli" />
            </div>
          </div>
        </div>
      </div>

      {/* Para controle de menu mobile, se necessário */}
      <input type="checkbox" id="menu-hamburguer" ref={menuMobile} />
    </section>
  );
};

export default Home;
