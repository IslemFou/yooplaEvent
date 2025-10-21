import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Profil from './pages/Profil';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
