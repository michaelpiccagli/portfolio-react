import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <a href="#">
            <h1 className="logo">MP</h1>
          </a>
          <nav>
            <input id="menu-hamburguer" type="checkbox" />
            <label htmlFor="menu-hamburguer">
              <div className="menu">
                <span className="hamburguer"></span>
              </div>
            </label>
            <ul>
              <li><a href="#about">Sobre mim</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Meus projetos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
