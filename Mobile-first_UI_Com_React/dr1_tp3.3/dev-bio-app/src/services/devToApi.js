// Serviço de integração com Dev.to API

const DEVTO_API_URL = 'https://dev.to/api/articles';
const DEVTO_USERNAME = 'rodbrice'; // Altere para seu username do Dev.to

/**
 * Busca artigos do Dev.to por username
 * @param {string} username - Username do Dev.to
 * @returns {Promise<Array>} Lista de artigos
 */
export const fetchDevToArticles = async (username = DEVTO_USERNAME) => {
  try {
    const response = await fetch(`${DEVTO_API_URL}?username=${username}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar artigos');
    }
    
    const articles = await response.json();
    
    // Formatar dados para o app
    return articles.map(article => ({
      id: article.id.toString(),
      title: article.title,
      description: article.description || 'Sem descrição',
      url: article.url,
      publishedAt: article.published_at,
      tags: article.tag_list,
      readingTime: article.reading_time_minutes,
      reactions: article.public_reactions_count,
      comments: article.comments_count,
      coverImage: article.cover_image,
    }));
  } catch (error) {
    console.error('Erro ao buscar artigos do Dev.to:', error);
    // Se houver erro, retorna artigos mockados
    return getMockArticles();
  }
};

/**
 * Artigos mockados caso a API falhe ou o usuário não tenha artigos
 */
const getMockArticles = () => {
  return [
    {
      id: '1',
      title: 'Introdução ao React Native',
      description: 'Aprenda os fundamentos do desenvolvimento mobile com React Native',
      url: 'https://dev.to/exemplo/introducao-react-native',
      publishedAt: '2026-03-01T10:00:00Z',
      tags: ['reactnative', 'mobile', 'javascript'],
      readingTime: 5,
      reactions: 42,
      comments: 8,
      coverImage: null,
    },
    {
      id: '2',
      title: 'Context API vs Redux: Quando usar cada um?',
      description: 'Comparação entre Context API e Redux para gerenciamento de estado',
      url: 'https://dev.to/exemplo/context-api-vs-redux',
      publishedAt: '2026-02-15T14:30:00Z',
      tags: ['react', 'redux', 'contextapi'],
      readingTime: 8,
      reactions: 87,
      comments: 15,
      coverImage: null,
    },
    {
      id: '3',
      title: 'AsyncStorage no React Native',
      description: 'Como persistir dados localmente em apps React Native',
      url: 'https://dev.to/exemplo/asyncstorage-react-native',
      publishedAt: '2026-02-01T09:00:00Z',
      tags: ['reactnative', 'asyncstorage', 'mobile'],
      readingTime: 6,
      reactions: 65,
      comments: 12,
      coverImage: null,
    },
  ];
};

