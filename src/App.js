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

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <Projects />
      <Qualification />
      <Contact />
      <Testimonials />
      <ScrollUp />
    </main>

    <Footer />

    </>
  )
}

export default App