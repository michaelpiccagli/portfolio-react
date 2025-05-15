import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/responsive.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TopButton from './components/TopButton';


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