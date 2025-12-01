import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>
                Nenhum produto cadastrado
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.categoria}</td>
                <td>R$ {parseFloat(product.preco).toFixed(2)}</td>
                <td>
                  <button 
                    className="btn-edit" 
                    onClick={() => onEdit(product)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => onDelete(product.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
