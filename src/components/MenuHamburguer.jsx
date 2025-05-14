const MenuHamburguer = () => {
  return (
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
  );
};

export default MenuHamburguer;