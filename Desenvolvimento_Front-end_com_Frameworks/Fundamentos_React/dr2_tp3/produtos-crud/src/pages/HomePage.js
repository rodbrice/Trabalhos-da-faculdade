import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const HomePage = () => {
  // Estado para armazenar os produtos
  const [products, setProducts] = useState([
    { id: 1, nome: 'Notebook Dell', categoria: 'Eletrônicos', preco: '3500.00' },
    { id: 2, nome: 'Mouse Logitech', categoria: 'Periféricos', preco: '150.00' },
    { id: 3, nome: 'Teclado Mecânico', categoria: 'Periféricos', preco: '450.00' }
  ]);

  // Estado para busca
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para produto em edição
  const [editingProduct, setEditingProduct] = useState(null);

  // Estado para mensagens de feedback
  const [message, setMessage] = useState({ text: '', type: '' });

  // Função para mostrar mensagem temporária
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  // Função para adicionar ou atualizar produto
  const handleSubmit = (formData) => {
    if (editingProduct) {
      // Atualizar produto existente
      setProducts(products.map(product => 
        product.id === editingProduct.id 
          ? { ...product, ...formData }
          : product
      ));
      showMessage('Produto atualizado com sucesso!', 'success');
      setEditingProduct(null);
    } else {
      // Adicionar novo produto
      const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...formData
      };
      setProducts([...products, newProduct]);
      showMessage('Produto adicionado com sucesso!', 'success');
    }
  };

  // Função para editar produto
  const handleEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Função para excluir produto
  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(products.filter(product => product.id !== id));
      showMessage('Produto removido com sucesso!', 'success');
    }
  };

  // Filtrar produtos pela busca
  const filteredProducts = products.filter(product =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <div className="container">
        {/* Mensagem de feedback */}
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Formulário de cadastro/edição */}
        <div className="content-box">
          <ProductForm 
            onSubmit={handleSubmit}
            editingProduct={editingProduct}
            setEditingProduct={setEditingProduct}
          />
        </div>

        {/* Campo de busca */}
        <div className="content-box">
          <div className="search-container">
            <label htmlFor="search">Buscar Produto:</label>
            <input
              type="text"
              id="search"
              placeholder="Digite o nome do produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Lista de produtos */}
        <div className="content-box">
          <h2>Lista de Produtos ({filteredProducts.length})</h2>
          <ProductList 
            products={filteredProducts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
