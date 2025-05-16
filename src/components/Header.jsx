import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <a href="#">
            <h1 className="logo no-select">MP</h1>
          </a>
          <nav>
            <div className="menu" onClick={toggleMenu} aria-label="Menu hamburguer" tabIndex={0} role="button" onKeyPress={toggleMenu}>
              <span className={`hamburguer ${menuOpen ? 'open' : ''}`}></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
              <li><a href="#about" onClick={closeMenu}>Sobre mim</a></li>
              <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
              <li><a href="#projects" onClick={closeMenu}>Meus projetos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

