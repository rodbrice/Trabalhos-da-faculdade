// Exercício 11: Integração com GitHub API
// Busca os repositórios públicos de um usuário

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Busca os repositórios de um usuário no GitHub
 * @param {string} username - Nome de usuário do GitHub
 * @returns {Promise<Array>} Lista de repositórios
 */
export const fetchUserRepositories = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=20`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar repositórios do GitHub');
    }
    
    const repos = await response.json();
    
    // Formatar dados para o app
    return repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Sem descrição',
      language: repo.language || 'N/A',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      homepage: repo.homepage,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw error;
  }
};

/**
 * Busca informações do perfil do usuário no GitHub
 * @param {string} username - Nome de usuário do GitHub
 * @returns {Promise<Object>} Dados do perfil
 */
export const fetchUserProfile = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar perfil do GitHub');
    }
    
    const profile = await response.json();
    
    return {
      login: profile.login,
      name: profile.name,
      avatar: profile.avatar_url,
      bio: profile.bio,
      location: profile.location,
      followers: profile.followers,
      following: profile.following,
      publicRepos: profile.public_repos,
      url: profile.html_url,
    };
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    throw error;
  }
};

export default {
  fetchUserRepositories,
  fetchUserProfile,
};

