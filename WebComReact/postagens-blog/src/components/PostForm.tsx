import React, { useState, useEffect } from 'react';
import { Post } from '../types/types';

// Exercício 5: Formulário com campos title e body — botão "Publicar Post"
// Exercício 8: Limpa campos após cadastro
// Exercício 10: Preenche form ao receber editingPost
// Exercício 11: Distingue criação de edição pelo id
// Exercício 14: Valida mínimo de 5 caracteres em title e body

interface PostFormProps {
  onSubmit: (post: Post) => void;
  editingPost: Post | null;
  onCancelEdit: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, editingPost, onCancelEdit }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  // Exercício 10: Ao receber um post para edição, preenche os campos
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
      setValidationError('');
    }
  }, [editingPost]);

  // Exercício 14: Validação — mínimo 5 caracteres
  const validate = (): boolean => {
    if (title.trim().length < 5) {
      setValidationError('O título deve ter pelo menos 5 caracteres.');
      return false;
    }
    if (body.trim().length < 5) {
      setValidationError('O corpo do texto deve ter pelo menos 5 caracteres.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Exercício 14: Bloqueia envio se validação falhar
    if (!validate()) return;

    // Exercício 11: Preserva o id se estiver editando, gera novo se não
    const post: Post = {
      id: editingPost ? editingPost.id : Date.now(),
      title: title.trim(),
      body: body.trim(),
      tags: editingPost ? editingPost.tags : [],
    };

    onSubmit(post);

    // Exercício 8: Limpa os campos após o envio
    setTitle('');
    setBody('');
    setValidationError('');
  };

  const handleCancel = () => {
    setTitle('');
    setBody('');
    setValidationError('');
    onCancelEdit();
  };

  const isEditing = editingPost !== null;

  return (
    <div className="content-box">
      {/* Exercício 11: Título do formulário muda conforme o modo */}
      <h2>{isEditing ? 'Editar Postagem' : 'Nova Postagem'}</h2>

      <form className="post-form" onSubmit={handleSubmit}>

        {/* Campo Título */}
        <div className="form-group">
          <label htmlFor="title">Título: *</label>
          <input
            type="text"
            id="title"
            placeholder="Digite o título da postagem (mín. 5 caracteres)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Campo Corpo */}
        <div className="form-group">
          <label htmlFor="body">Corpo do Texto: *</label>
          <textarea
            id="body"
            placeholder="Digite o conteúdo da postagem (mín. 5 caracteres)"
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* Exercício 14: Mensagem de validação */}
        {validationError && (
          <span className="error-message">{validationError}</span>
        )}

        <div className="form-buttons">
          {/* Exercício 11: Botão muda de texto conforme o modo */}
          <button type="submit" className="btn-submit">
            {isEditing ? 'Salvar Alterações' : 'Publicar Post'}
          </button>
          {isEditing && (
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
