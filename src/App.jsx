import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/responsive.css';

import Header from './components/Header';
import Home from './components/Home';
import MenuHamburguer from './components/MenuHamburguer';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <MenuHamburguer />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <BackToTopButton />
      <HomePage />
    </>
  );
};

export default App;