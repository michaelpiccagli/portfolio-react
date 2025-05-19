import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

import './styles/responsive.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <TopButton />
    </>
  );
};

export default App;