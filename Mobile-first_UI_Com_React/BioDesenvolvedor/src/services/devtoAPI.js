// Exercício 12: Integração com Dev.to API

const DEVTO_API_BASE = 'https://dev.to/api';

export const fetchPopularArticles = async () => {
  try {
    const response = await fetch(`${DEVTO_API_BASE}/articles?top=7&per_page=15`);
    if (!response.ok) throw new Error('Falha ao buscar artigos');
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
    console.error('Erro ao buscar artigos:', error);
    throw error;
  }
};

export default { fetchPopularArticles };

