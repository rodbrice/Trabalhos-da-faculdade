import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { Post, FeedbackMessage } from './types/types';
import './styles/App.css';

// Exercício 1: Sistema de Gestão de Conteúdo — postagens-blog

// Exercício 2: App.tsx exibe "Sistema de Gestão de Conteúdo" via Header
// Exercício 3: useEffect para fetch na API e exibir os 3 primeiros títulos

function App() {
  // Exercício 6: useState<Post[]> para armazenar as postagens
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Exercício 10: Post sendo editado no momento
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  // Exercício 13: Mensagem de feedback temporária
  const [message, setMessage] = useState<FeedbackMessage | null>(null);

  // Exercício 15: Termo de busca
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Exercício 3: Buscar postagens da API ao montar o componente
  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();

        // Exercício 3: Captura as primeiras 3 postagens
        const initialPosts: Post[] = data.posts.slice(0, 3).map((p: Post) => ({
          id: p.id,
          title: p.title,
          body: p.body,
          tags: p.tags,
        }));

        // Exercício 6: Inicializa o estado com os dados vindos da API
        setPosts(initialPosts);
      } catch (error) {
        console.error('Erro ao buscar postagens:', error);
        showFeedback('error', 'Erro ao carregar postagens!');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Exercício 13: Exibe mensagem temporária por 3 segundos
  const showFeedback = (type: FeedbackMessage['type'], text: string): void => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  // Exercício 7 / Exercício 11: Adicionar ou atualizar postagem no estado
  const handleSubmit = (post: Post): void => {
    if (editingPost) {
      // Exercício 11: Atualização — substituir no estado pelo id
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? post : p))
      );
      showFeedback('success', 'Alterações salvas!');
      setEditingPost(null);
    } else {
      // Exercício 7: Adicionar novo post ao estado local
      setPosts((prev) => [post, ...prev]);
      showFeedback('success', 'Postagem publicada!');
    }
  };

  // Exercício 9: Remover postagem pelo id
  const handleDelete = (id: number): void => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    showFeedback('success', 'Post removido!');
  };

  // Exercício 10: Preencher formulário com dados do post a editar
  const handleEdit = (post: Post): void => {
    setEditingPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = (): void => {
    setEditingPost(null);
  };

  // Exercício 15: Filtrar postagens pelo termo de busca
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* Exercício 2: Renderizar Header */}
      <Header />

      <main className="container">
        {/* Exercício 13: Mensagens de feedback */}
        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Exercício 5 / 7 / 8 / 10 / 11 / 14: Formulário */}
        <PostForm
          onSubmit={handleSubmit}
          editingPost={editingPost}
          onCancelEdit={handleCancelEdit}
        />

        {/* Exercício 15: Campo de busca */}
        <div className="search-bar">
          <input
            type="search"
            placeholder="Buscar postagem por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Lista com contagem */}
        <div className="list-header">
          <h2>
            {searchTerm
              ? `Resultados para "${searchTerm}" (${filteredPosts.length})`
              : `Postagens (${posts.length})`}
          </h2>
        </div>

        {/* Exercício 5: Exibir carregando */}
        {loading ? (
          <div className="content-box">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Carregando postagens...</p>
            </div>
          </div>
        ) : (
          // Exercício 6: PostList recebe o estado de postagens filtradas
          // Exercício 9 / 10: Passa handlers de delete e edit
          <PostList
            posts={filteredPosts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
