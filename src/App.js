import React from 'react';
import "./App.css";
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
    <>
    <BrowserRouter basename='/containers/noanrandon-portfolio/'></BrowserRouter>
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

    </>
  )
}

export default App