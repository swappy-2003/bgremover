import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './component/landingpage'
import BackgroundRemover from './component/remover';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/remove-background" element={<BackgroundRemover />} />
      </Routes>
    </Router>
  );
}

export default App;