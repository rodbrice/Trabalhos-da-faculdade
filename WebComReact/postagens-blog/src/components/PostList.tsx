import React from 'react';
import { Post } from '../types/types';

// Exercício 4: Componente PostList — recebe array de postagens via props
// Exercício 9: Botão "Excluir" com id para filtrar do estado
// Exercício 10: Botão "Editar" para enviar dados ao formulário
// Exercício 15: Campo de busca acima da lista (filtro aplicado no App.tsx)

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onEdit, onDelete }) => {
  if (posts.length === 0) {
    return (
      <div className="content-box">
        <p className="no-posts">Nenhuma postagem encontrada.</p>
      </div>
    );
  }

  return (
    <div className="content-box">
      {/* Exercício 4: Exibir title e tags em tabela estruturada */}
      <table className="posts-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Tags</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="post-id">{post.id}</td>
              <td className="post-title">{post.title}</td>
              <td className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </td>
              <td className="post-actions">
                {/* Exercício 10: Botão Editar */}
                <button
                  className="btn-edit"
                  onClick={() => onEdit(post)}
                >
                  Editar
                </button>
                {/* Exercício 9: Botão Excluir */}
                <button
                  className="btn-delete"
                  onClick={() => onDelete(post.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
