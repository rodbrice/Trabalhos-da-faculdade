import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/1" element={<Exercise1 />} />
          <Route path="/exercise/2" element={<Exercise2 />} />
          <Route path="/exercise/3" element={<Exercise3 />} />
          <Route path="/exercise/4" element={<Exercise4 />} />
          <Route path="/exercise/5" element={<Exercise5 />} />
          <Route path="/exercise/6" element={<Exercise6 />} />
          <Route path="/exercise/7" element={<Exercise7 />} />
          <Route path="/exercise/8" element={<Exercise8 />} />
          <Route path="/exercise/9" element={<Exercise9 />} />
          <Route path="/exercise/10" element={<Exercise10 />} />
          <Route path="/exercise/11" element={<Exercise11 />} />
          <Route path="/exercise/12" element={<Exercise12 />} />
          <Route path="/exercise/13" element={<Exercise13 />} />
          <Route path="/exercise/14" element={<Exercise14 />} />
          <Route path="/exercise/15" element={<Exercise15 />} />
          <Route path="/exercise/16" element={<Exercise16 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
