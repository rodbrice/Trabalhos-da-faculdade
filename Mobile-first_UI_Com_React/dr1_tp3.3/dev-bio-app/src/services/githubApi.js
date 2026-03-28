// Serviço de integração com GitHub API

const GITHUB_USERNAME = 'rodbrice';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

/**
 * Busca os repositórios do GitHub do usuário
 * @returns {Promise<Array>} Lista de repositórios
 */
export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(GITHUB_API_URL + '?sort=updated&per_page=20');
    
    if (!response.ok) {
      throw new Error('Erro ao buscar repositórios');
    }
    
    const repos = await response.json();
    
    // Formatar dados para o app
    return repos.map(repo => ({
      id: repo.id.toString(),
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || 'Sem descrição disponível',
      language: repo.language || 'Não especificado',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      topics: repo.topics || [],
      isPrivate: repo.private,
      defaultBranch: repo.default_branch,
    }));
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error);
    throw error;
  }
};

/**
 * Busca informações do usuário do GitHub
 * @returns {Promise<Object>} Dados do usuário
 */
export const fetchGitHubUser = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar usuário');
    }
    
    const user = await response.json();
    
    return {
      login: user.login,
      name: user.name,
      bio: user.bio,
      avatarUrl: user.avatar_url,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      location: user.location,
      blog: user.blog,
    };
  } catch (error) {
    console.error('Erro ao buscar usuário do GitHub:', error);
    throw error;
  }
};

