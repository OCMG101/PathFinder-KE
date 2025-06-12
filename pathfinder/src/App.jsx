import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './views/About';
import Contact from './views/Contact';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>PathFinder KE</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
