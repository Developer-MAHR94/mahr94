import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import GameJIAProject from './components/GameJIAProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/proyecto-game-jia" element={<GameJIAProject />} />
      </Routes>
    </Router>
  );
}

export default App; 