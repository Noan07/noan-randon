import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Qualification from './components/qualification/Qualification';
import Projects from './components/Portfolio/Work';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <Projects />
      <Qualification />
      <Contact />
    </main>

    <Footer />
    </>
  )
}

export default App