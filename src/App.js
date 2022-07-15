import React from 'react';
import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
        <Header/>
        <About />
        <Menu />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
