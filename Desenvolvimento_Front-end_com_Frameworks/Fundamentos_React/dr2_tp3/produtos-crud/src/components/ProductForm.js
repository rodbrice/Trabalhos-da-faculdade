import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, editingProduct, setEditingProduct }) => {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: ''
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        nome: editingProduct.nome,
        categoria: editingProduct.categoria,
        preco: editingProduct.preco
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação
    if (!formData.nome.trim() || !formData.categoria.trim() || !formData.preco.trim()) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (isNaN(formData.preco) || parseFloat(formData.preco) <= 0) {
      alert('Por favor, insira um preço válido!');
      return;
    }

    onSubmit(formData);
    
    // Limpar formulário
    setFormData({
      nome: '',
      categoria: '',
      preco: ''
    });
  };

  const handleCancel = () => {
    setFormData({
      nome: '',
      categoria: '',
      preco: ''
    });
    setEditingProduct(null);
  };

  return (
    <div className="product-form">
      <h2>{editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Digite a categoria"
          />
        </div>

        <div className="form-group">
          <label htmlFor="preco">Preço (R$):</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {editingProduct ? 'Atualizar Produto' : 'Adicionar Produto'}
          </button>
          {editingProduct && (
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
