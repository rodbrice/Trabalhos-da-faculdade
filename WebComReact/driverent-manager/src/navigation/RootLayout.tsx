import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FeedbackMessage } from '../types/types';

// Layout Base (Shared Layout) - Renderiza estrutura comum de todas as páginas

interface RootLayoutProps {
  isLogged: boolean;
  onToggleAuth: () => void;
  message: FeedbackMessage | null;
}

const RootLayout: React.FC<RootLayoutProps> = ({ isLogged, onToggleAuth, message }) => {
  return (
    <div className="App">
      <Header />
      <NavBar isLogged={isLogged} onToggleAuth={onToggleAuth} />
      
      <main className="container">
        {/* Mensagens de feedback */}
        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        {/* Outlet para renderizar as páginas dinamicamente */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default RootLayout;

