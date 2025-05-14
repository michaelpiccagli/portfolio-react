import '../styles/home.css';
import imgProfile from '../assets/img/michael-1.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="text-home">
            <p></p>
            <h1></h1>
            <span></span>
            <h2></h2>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/michaelpiccagli" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/5511947376865" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://github.com/michaelpiccagli" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/michael_piccagli/" className="outer-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="img-home">
            <div className="img-box">
              <img src={imgProfile} alt="Michael Piccagli" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
