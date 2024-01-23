import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* Navigation bar goes here */}
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          {/* Footer content goes here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;