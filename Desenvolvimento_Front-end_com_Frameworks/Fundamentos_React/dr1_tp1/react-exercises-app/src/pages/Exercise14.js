import React from 'react';
import { Link } from 'react-router-dom';

// Componente Card reutilizável
const ProductCard = ({ product, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'eletronicos': '#007bff',
      'roupas': '#28a745',  
      'casa': '#ffc107',
      'esportes': '#dc3545',
      'livros': '#6f42c1',
      'default': '#6c757d'
    };
    return colors[category.toLowerCase()] || colors.default;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '*'.repeat(fullStars) + 
           (hasHalfStar ? '*' : '') + 
           '-'.repeat(emptyStars);
  };

  return (
    <div className="product-card" style={{ 
      transform: `scale(${1 + (index % 3) * 0.02})`,
      transition: 'all 0.3s ease'
    }}>
      <div style={{ 
        background: `linear-gradient(135deg, ${getCategoryColor(product.category)}22, ${getCategoryColor(product.category)}44)`,
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem'
      }}>
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>
          {product.emoji}
        </div>
      </div>
      
      <h3>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
        {product.description}
      </p>
      
      <div style={{ margin: '1rem 0' }}>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>
          Avaliação: {getRatingStars(product.rating)} ({product.rating}/5)
        </div>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>
          Em estoque: {product.stock} unidades
        </div>
      </div>
      
      <div className="price" style={{ 
        color: getCategoryColor(product.category),
        fontSize: '1.3rem',
        fontWeight: 'bold'
      }}>
        {formatPrice(product.price)}
      </div>
      
      <div className="category" style={{ 
        background: getCategoryColor(product.category) 
      }}>
        {product.category}
      </div>
      
      <div style={{ 
        fontSize: '0.8rem', 
        color: '#999', 
        marginTop: '0.5rem',
        textAlign: 'center'
      }}>
        ID: {product.id} | Adicionado: {product.dateAdded}
      </div>
    </div>
  );
};

const Exercise14 = () => {
  // Array de produtos simulando uma loja online
  const products = [
    {
      id: 'PROD001',
      name: 'Smartphone Galaxy Pro',
      description: 'Smartphone top de linha com câmera de 108MP, tela AMOLED e 256GB de armazenamento.',
      price: 2999.99,
      category: 'Eletrônicos',
      rating: 4.5,
      stock: 15,
      emoji: 'SP',
      dateAdded: '2024-01-15'
    },
    {
      id: 'PROD002', 
      name: 'Notebook Gamer RGB',
      description: 'Notebook para jogos com placa de vídeo dedicada, 16GB RAM e SSD de 1TB.',
      price: 5499.99,
      category: 'Eletrônicos', 
      rating: 4.8,
      stock: 8,
      emoji: 'NB',
      dateAdded: '2024-01-20'
    },
    {
      id: 'PROD003',
      name: 'Camiseta Básica Premium',
      description: 'Camiseta 100% algodão com corte moderno e alta qualidade.',
      price: 79.90,
      category: 'Roupas',
      rating: 4.2,
      stock: 50,
      emoji: 'CM',
      dateAdded: '2024-01-10'
    },
    {
      id: 'PROD004',
      name: 'Tênis Esportivo Air',
      description: 'Tênis para corrida com tecnologia de amortecimento e design moderno.',
      price: 299.99,
      category: 'Esportes',
      rating: 4.6,
      stock: 25,
      emoji: 'TN',
      dateAdded: '2024-01-25'
    },
    {
      id: 'PROD005',
      name: 'Livro: JavaScript Avançado',
      description: 'Livro sobre programação JavaScript avançada.',
      price: 89.90,
      category: 'Livros',
      rating: 4.9,
      stock: 100,
      emoji: 'LV',
      dateAdded: '2024-01-05'
    },
    {
      id: 'PROD006',
      name: 'Cafeteira Espresso Pro',
      description: 'Cafeteira automática com moedor integrado e controle de temperatura.',
      price: 1299.99,
      category: 'Casa',
      rating: 4.3,
      stock: 12,
      emoji: 'CF',
      dateAdded: '2024-01-18'
    },
    {
      id: 'PROD007',
      name: 'Fones Bluetooth Premium',
      description: 'Fones de ouvido sem fio com cancelamento de ruído e bateria de 30h.',
      price: 899.99,
      category: 'Eletrônicos',
      rating: 4.7,
      stock: 30,
      emoji: 'HD',
      dateAdded: '2024-01-12'
    },
    {
      id: 'PROD008',
      name: 'Bicicleta Mountain Bike',
      description: 'Bicicleta para trilhas com suspensão dianteira e 21 velocidades.',
      price: 1899.99,
      category: 'Esportes',
      rating: 4.4,
      stock: 6,
      emoji: 'BC',
      dateAdded: '2024-01-22'
    }
  ];

  // Estatísticas dos produtos
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
  const avgRating = products.reduce((sum, product) => sum + product.rating, 0) / products.length;

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Componentes Dinâmicos</h1>
          <p>Exercício 14: Cards de produtos renderizados dinamicamente</p>
        </div>
      </div>
      
      <div className="container">
        <Link to="/" className="back-button">← Voltar à página inicial</Link>
        
        <div className="content-box">
          <h2>🏪 Loja Online - Catálogo de Produtos</h2>
          <p>
            Esta seção demonstra como usar componentes React para renderizar 
            dinamicamente uma lista de produtos de uma loja online fictícia.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <div className="calculation-box" style={{ textAlign: 'center' }}>
              <h4>📦 Total de Produtos</h4>
              <div className="result" style={{ fontSize: '2rem' }}>{totalProducts}</div>
            </div>
            
            <div className="calculation-box" style={{ textAlign: 'center' }}>
              <h4>💰 Valor Total em Estoque</h4>
              <div className="result" style={{ fontSize: '1.2rem', color: '#28a745' }}>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
              </div>
            </div>
            
            <div className="calculation-box" style={{ textAlign: 'center' }}>
              <h4>Avaliação Média</h4>
              <div className="result" style={{ fontSize: '1.5rem', color: '#ffc107' }}>
                {avgRating.toFixed(1)}/5
              </div>
            </div>

          </div>
        </div>

        <div className="content-box">
          <h2>Catálogo Completo</h2>
          <div className="cards-container">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Exercise14;