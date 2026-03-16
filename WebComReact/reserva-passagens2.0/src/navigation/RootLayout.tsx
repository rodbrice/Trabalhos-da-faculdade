import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FeedbackMessage } from '../types/types';

// Requisito 6: Layout Base (Shared Layout)

interface RootLayoutProps {
  isAuth: boolean;
  onToggleAuth: () => void;
  message: FeedbackMessage | null;
}

const RootLayout: React.FC<RootLayoutProps> = ({ isAuth, onToggleAuth, message }) => {
  return (
    <div className="App">
      <Header />
      <NavBar isAuth={isAuth} onToggleAuth={onToggleAuth} />
      
      <main className="container">
        {/* Mensagens de feedback */}
        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        {/* Requisito 6: Outlet para renderizar as páginas dinamicamente */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default RootLayout;

