import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import Task5 from './pages/Task5';
import Task6 from './pages/Task6';
import Task7 from './pages/Task7';
import Task8 from './pages/Task8';
import Task9 from './pages/Task9';
import Task10 from './pages/Task10';
import Task11 from './pages/Task11';
import Task12 from './pages/Task12';
import Task13 from './pages/Task13';
import Task14 from './pages/Task14';
import Task15 from './pages/Task15';
import Task16 from './pages/Task16';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task/1" element={<Task1 />} />
          <Route path="/task/2" element={<Task2 />} />
          <Route path="/task/3" element={<Task3 />} />
          <Route path="/task/4" element={<Task4 />} />
          <Route path="/task/5" element={<Task5 />} />
          <Route path="/task/6" element={<Task6 />} />
          <Route path="/task/7" element={<Task7 />} />
          <Route path="/task/8" element={<Task8 />} />
          <Route path="/task/9" element={<Task9 />} />
          <Route path="/task/10" element={<Task10 />} />
          <Route path="/task/11" element={<Task11 />} />
          <Route path="/task/12" element={<Task12 />} />
          <Route path="/task/13" element={<Task13 />} />
          <Route path="/task/14" element={<Task14 />} />
          <Route path="/task/15" element={<Task15 />} />
          <Route path="/task/16" element={<Task16 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

