import React from 'react';
import styles from './Footer.module.css';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://www.facebook.com', label: 'Facebook' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com', label: 'Instagram' },
    { icon: <TwitterIcon />, url: 'https://www.twitter.com', label: 'Twitter' },
    { icon: <YouTubeIcon />, url: 'https://www.youtube.com', label: 'YouTube' },
    { icon: <WhatsAppIcon />, url: 'https://www.whatsapp.com', label: 'WhatsApp' }
  ];

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
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo e Slogan */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoName}>Marco</span>
              <span className={styles.logoSurname}>Madureira</span>
            </div>
            <p className={styles.slogan}>Juntos por um Futuro Melhor</p>
          </div>

          {/* Links de Navegação */}
          <nav className={styles.navSection}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <ul className={styles.navList}>
              <li>
                <a href="#biografia" onClick={(e) => handleNavClick(e, 'biografia')}>
                  Biografia
                </a>
              </li>
              <li>
                <a href="#propostas" onClick={(e) => handleNavClick(e, 'propostas')}>
                  Propostas
                </a>
              </li>
              <li>
                <a href="#agenda" onClick={(e) => handleNavClick(e, 'agenda')}>
                  Agenda
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Informações de Contato */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <EmailIcon className={styles.contactIcon} />
                <a href="mailto:contato@marcomadureira.com.br">
                  contato@marcomadureira.com.br
                </a>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon className={styles.contactIcon} />
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </div>
              <div className={styles.contactItem}>
                <LocationOnIcon className={styles.contactIcon} />
                <span>Rua da Democracia, 123 - Centro</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Redes Sociais</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={styles.socialButton}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'var(--secondary-color)',
                      transform: 'translateY(-3px)'
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                      transition: 'none',
                      '&:hover': {
                        transform: 'none'
                      }
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} Marco Madureira. Todos os direitos reservados.
          </p>
          <p className={styles.disclaimer}>
            Campanha eleitoral desenvolvida com transparência e compromisso.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
