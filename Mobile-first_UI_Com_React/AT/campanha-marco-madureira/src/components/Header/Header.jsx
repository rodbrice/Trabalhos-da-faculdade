import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const navItems = [
    { id: 'biografia', label: 'Biografia' },
    { id: 'propostas', label: 'Propostas' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo} onClick={(e) => handleNavClick(e, 'inicio')}>
          <span className={styles.logoName}>Marco</span>
          <span className={styles.logoSurname}>Madureira</span>
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <IconButton
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          sx={{
            color: 'white',
            display: { xs: 'flex', md: 'none' },
            zIndex: 1001
          }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      </div>
    </header>
  );
};

export default Header;
