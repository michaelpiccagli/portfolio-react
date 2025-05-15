import '../styles/skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="no-select">Habilidades</h2>
          </div>
        </div>
        <div className="container-skills row">
          <div className="skill html">
            <div className="logo">
              <i className="devicon devicon-html5-plain-wordmark"></i>
            </div>
            <h3 className="html">HTML5</h3>
            <p>
              Tenho conhecimento com Tags semânticas, meta tags, divs,
              importação de fonts externas.
            </p>
          </div>
          <div className="skill css">
            <div className="logo">
              <i className="devicon devicon-css3-plain-wordmark"></i>
            </div>
            <h3 className="css">CSS3</h3>
            <p>
              Conheço bem os conceitos de flexbox, Grid Layout, responsividade,
              criação de variáveis, CSS semântico, dentre outras.
            </p>
          </div>
          <div className="skill javascript">
            <span className="html card-border"></span>
            <div className="logo">
              <i className="devicon devicon-javascript-plain"></i>
            </div>
            <h3 className="javascript">JavaScript</h3>
            <p>
              Tenho conhecimentos em JavaScript como variáveis, funções, arrays, objetos, manipulação do DOM, eventos, e
              lógica de programação. Também compreendo conceitos como callbacks, promises e escopo.
            </p>
          </div>

          <div className="skill github">
            <div className="logo">
              <i className="devicon devicon-github-original"></i>
            </div>
            <h3 className="github">GitHub</h3>
            <p>
              Tenho conhecimento da plataforma do GitHub, criação do README e hospedagem no github
              pages.
            </p>
          </div>
          <div className="skill react">
            <div className="logo">
              <i className="devicon devicon-react-original"></i>
            </div>
            <h3 className="react">React</h3>
            <p>Tenho conhecimentos básicos sobre React e atualmente estudando sobre seus conceitos</p>
          </div>

          <div className="skill sass">
            <div className="logo">
              <i className="devicon devicon-sass-original"></i>
            </div>
            <h3 className="sass">Sass</h3>
            <p>
              Tenho conhecimentos básicos sobre Sass.
            </p>
          </div>
          <div className="skill git">
            <div className="logo">
              <i className="devicon devicon-git-plain"></i>
            </div>
            <h3 className="git">Git</h3>
            <p>
              Conheço os conceitos de versionamento de código , estado dos
              arquivos, e configuração do SSH no Git, além de conhecimento sobre
              commits semânticos, clone de repósitório, dentre outros, comandos
              de uso geral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
