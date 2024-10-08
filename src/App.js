import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Qualification from './components/qualification/Qualification';
import Projects from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App