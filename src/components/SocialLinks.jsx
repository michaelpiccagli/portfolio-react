
const SocialLinks = ({ className = "social-media" }) => {
  return (
    <div className={className}>
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
  );
};

export default SocialLinks;
