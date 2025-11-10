import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import Exercise6 from './pages/Exercise6';
import Exercise7 from './pages/Exercise7';
import Exercise8 from './pages/Exercise8';
import Exercise9 from './pages/Exercise9';
import Exercise10 from './pages/Exercise10';
import Exercise11 from './pages/Exercise11';
import Exercise12 from './pages/Exercise12';
import Exercise13 from './pages/Exercise13';
import Exercise14 from './pages/Exercise14';
import Exercise15 from './pages/Exercise15';
import Exercise16 from './pages/Exercise16';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/exercise2" element={<Exercise2 />} />
            <Route path="/exercise3" element={<Exercise3 />} />
            <Route path="/exercise4" element={<Exercise4 />} />
            <Route path="/exercise5" element={<Exercise5 />} />
            <Route path="/exercise6" element={<Exercise6 />} />
            <Route path="/exercise7" element={<Exercise7 />} />
            <Route path="/exercise8" element={<Exercise8 />} />
            <Route path="/exercise9" element={<Exercise9 />} />
            <Route path="/exercise10" element={<Exercise10 />} />
            <Route path="/exercise11" element={<Exercise11 />} />
            <Route path="/exercise12" element={<Exercise12 />} />
            <Route path="/exercise13" element={<Exercise13 />} />
            <Route path="/exercise14" element={<Exercise14 />} />
            <Route path="/exercise15" element={<Exercise15 />} />
            <Route path="/exercise16" element={<Exercise16 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
