import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Exercise1 from './components/exercises/Exercise1';
import Exercise2 from './components/exercises/Exercise2';
import Exercise3 from './components/exercises/Exercise3';
import Exercise4 from './components/exercises/Exercise4';
import Exercise5 from './components/exercises/Exercise5';
import Exercise6 from './components/exercises/Exercise6';
import Exercise7 from './components/exercises/Exercise7';
import Exercise8 from './components/exercises/Exercise8';
import Exercise9 from './components/exercises/Exercise9';
import Exercise10 from './components/exercises/Exercise10';
import Exercise11 from './components/exercises/Exercise11';
import Exercise12 from './components/exercises/Exercise12';
import Exercise13 from './components/exercises/Exercise13';
import Exercise14 from './components/exercises/Exercise14';
import Exercise15 from './components/exercises/Exercise15';
import Exercise16 from './components/exercises/Exercise16';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
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
