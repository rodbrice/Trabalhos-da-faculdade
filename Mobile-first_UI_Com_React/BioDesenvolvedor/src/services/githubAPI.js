// Exercício 11: Integração com GitHub API

const GITHUB_API_BASE = 'https://api.github.com';

export const fetchUserRepositories = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=20`);
    if (!response.ok) throw new Error('Falha ao buscar repositórios');
    const repos = await response.json();
    
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

export default { fetchUserRepositories };

