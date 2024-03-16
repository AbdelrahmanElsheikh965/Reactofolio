import './App.css';
import About from './components/About/About';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portofolio/Portofolio';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
