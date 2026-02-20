import React from 'react';
import BackButton from '../components/BackButton';
import '../styles/TaskStyles.css';

function Task15() {
  const news = [
    {
      id: 1,
      title: 'Nova versão do React Native lançada',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      description: 'A equipe do React Native anunciou uma nova versão com melhorias significativas de performance e novas funcionalidades que prometem revolucionar o desenvolvimento mobile.'
    },
    {
      id: 2,
      title: 'JavaScript continua sendo a linguagem mais popular',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      description: 'Segundo pesquisa recente, JavaScript mantém sua posição como a linguagem de programação mais utilizada no mundo, impulsionada pelo crescimento do desenvolvimento web e mobile.'
    },
    {
      id: 3,
      title: 'Tendências de UX/UI Design para 2026',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      description: 'Designers ao redor do mundo compartilham as principais tendências de interface e experiência do usuário para o ano de 2026, incluindo modo dark, microinterações e design inclusivo.'
    },
    {
      id: 4,
      title: 'Inteligência Artificial no desenvolvimento mobile',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
      description: 'Como a IA está transformando o desenvolvimento de aplicativos mobile, desde a geração de código até a otimização de performance e personalização da experiência do usuário.'
    },
    {
      id: 5,
      title: 'Performance: otimize seu app React Native',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      description: 'Dicas práticas e técnicas avançadas para melhorar a performance do seu aplicativo React Native, incluindo lazy loading, memoization e otimização de renderizações.'
    }
  ];

  return (
    <div className="task-container">
      <BackButton />
      <div className="news-container">
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px', 
          color: '#333',
          fontSize: '2rem'
        }}>
          📰 Últimas Notícias
        </h1>
        
        {news.map((article) => (
          <div key={article.id} className="news-card">
            <img
              className="news-image"
              src={article.image}
              alt={article.title}
            />
            <h2 className="news-title">
              {article.title}
            </h2>
            <p className="news-description">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task15;

