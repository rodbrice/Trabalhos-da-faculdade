import React from 'react';
import styles from './Biografia.module.css';

const Biografia = () => {
  return (
    <section id="biografia" className={styles.biografia}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Biografia</h2>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="Marco Madureira - Candidato"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <span className={styles.slogan}>Juntos por um Futuro Melhor</span>
              </div>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>Conheça Marco Madureira</h3>
            
            <p className={styles.paragraph}>
              Marco Madureira nasceu e cresceu em nossa cidade, onde aprendeu desde cedo 
              o valor do trabalho duro e da dedicação à comunidade. Formado em Administração 
              Pública pela Universidade Federal, possui também especialização em Gestão de 
              Políticas Públicas e Desenvolvimento Sustentável.
            </p>
            
            <p className={styles.paragraph}>
              Com mais de 20 anos de experiência em gestão pública e privada, Marco 
              trabalhou em diversos projetos que transformaram a realidade de milhares 
              de famílias. Foi secretário de Desenvolvimento Social por dois mandatos, 
              onde implementou programas inovadores de inclusão e geração de emprego.
            </p>
            
            <p className={styles.paragraph}>
              Casado com Ana Paula e pai de dois filhos, Pedro e Sofia, Marco acredita 
              que a política deve ser feita com transparência, ética e compromisso com 
              o bem-estar da população. Seu objetivo é construir uma cidade mais justa, 
              moderna e sustentável para as próximas gerações.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>20+</span>
                <span className={styles.highlightText}>Anos de Experiência</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>50k+</span>
                <span className={styles.highlightText}>Famílias Beneficiadas</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightNumber}>100+</span>
                <span className={styles.highlightText}>Projetos Realizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biografia;
