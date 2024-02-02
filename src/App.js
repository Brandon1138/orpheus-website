import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <Hero />
        <ServicesSection> 
          
        </ServicesSection>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;