// Serviço para consumir API do Dev.to
import axios from 'axios';

const DEVTO_API = 'https://dev.to/api';

export const devtoService = {
  // Buscar artigos do usuário
  getArticles: async (username) => {
    try {
      const response = await axios.get(
        `${DEVTO_API}/articles?username=${username}&per_page=10`
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar artigos:', error);
      throw error;
    }
  },

  // Buscar detalhes de um artigo específico
  getArticleDetails: async (articleId) => {
    try {
      const response = await axios.get(`${DEVTO_API}/articles/${articleId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar detalhes do artigo:', error);
      throw error;
    }
  },
};

