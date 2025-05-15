import '../styles/footer.css';
import SocialLinks from './SocialLinks';
import '../styles/back-to-top-button.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>Me envie uma mensagem!</h2>
        <SocialLinks className="social-media centralized" />
      </div>
    </footer>
  );
};

export default Footer;
