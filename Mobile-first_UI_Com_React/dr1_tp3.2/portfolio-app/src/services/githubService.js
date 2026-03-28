// Serviço para consumir API do GitHub
import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

export const githubService = {
  // Buscar repositórios do usuário
  getRepositories: async (username) => {
    try {
      const response = await axios.get(
        `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=10`
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      throw error;
    }
  },

  // Buscar informações do usuário
  getUserInfo: async (username) => {
    try {
      const response = await axios.get(`${GITHUB_API}/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
      throw error;
    }
  },

  // Buscar detalhes de um repositório específico
  getRepositoryDetails: async (username, repoName) => {
    try {
      const response = await axios.get(
        `${GITHUB_API}/repos/${username}/${repoName}`
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar detalhes do repositório:', error);
      throw error;
    }
  },
};

