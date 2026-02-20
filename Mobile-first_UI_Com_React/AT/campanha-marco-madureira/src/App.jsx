import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Biografia from './components/Biografia/Biografia';
import Propostas from './components/Propostas/Propostas';
import Agenda from './components/Agenda/Agenda';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Biografia />
        <Propostas />
        <Agenda />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
