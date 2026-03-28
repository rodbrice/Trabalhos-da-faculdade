// Exercício 12: Integração com Dev.to API
// Busca artigos publicados por um usuário

const DEVTO_API_BASE = 'https://dev.to/api';

/**
 * Busca os artigos de um usuário no Dev.to
 * @param {string} username - Nome de usuário do Dev.to
 * @returns {Promise<Array>} Lista de artigos
 */
export const fetchUserArticles = async (username) => {
  try {
    const response = await fetch(`${DEVTO_API_BASE}/articles?username=${username}&per_page=30`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar artigos do Dev.to');
    }
    
    const articles = await response.json();
    
    // Formatar dados para o app
    return articles.map(article => ({
      id: article.id,
      title: article.title,
      description: article.description,
      coverImage: article.cover_image,
      publishedAt: article.published_at,
      url: article.url,
      tags: article.tag_list,
      reactions: article.public_reactions_count,
      comments: article.comments_count,
      readingTime: article.reading_time_minutes,
    }));
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    throw error;
  }
};

/**
 * Busca artigos mais populares (fallback quando não há username)
 * @returns {Promise<Array>} Lista de artigos populares
 */
export const fetchPopularArticles = async () => {
  try {
    const response = await fetch(`${DEVTO_API_BASE}/articles?top=7&per_page=10`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar artigos populares');
    }
    
    const articles = await response.json();
    
    return articles.map(article => ({
      id: article.id,
      title: article.title,
      description: article.description,
      coverImage: article.cover_image,
      publishedAt: article.published_at,
      url: article.url,
      tags: article.tag_list,
      reactions: article.public_reactions_count,
      comments: article.comments_count,
      readingTime: article.reading_time_minutes,
      author: article.user.name,
    }));
  } catch (error) {
    console.error('Erro ao buscar artigos populares:', error);
    throw error;
  }
};

export default {
  fetchUserArticles,
  fetchPopularArticles,
};

