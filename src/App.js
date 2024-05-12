import React from 'react';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Qualification from './components/qualification/Qualification';
import Projects from './components/Portfolio/Work';
import ScrollUp from './components/scrollup/ScrollUp';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <BrowserRouter basename='/containers/noanrandon-portfolio/'>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Testimonials />
      <ScrollUp />
    </main>

    <Footer />

    </BrowserRouter>
  )
}

export default App