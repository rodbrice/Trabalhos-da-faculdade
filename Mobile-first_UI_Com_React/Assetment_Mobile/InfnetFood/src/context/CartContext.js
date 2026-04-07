// Exercício 5: Context do Carrinho de Compras - InfnetFood
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { saveCart, getCart, clearCartStorage } from '../services/storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    if (!loading) saveCart(items);
  }, [items, loading]);

  const loadCart = async () => {
    const saved = await getCart();
    if (saved) setItems(saved);
    setLoading(false);
  };

  /** Adiciona produto ao carrinho (ou incrementa quantidade) */
  const addItem = useCallback((product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);

  /** Remove item do carrinho */
  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  /** Atualiza quantidade de um item */
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  /** Limpa o carrinho */
  const clearCart = useCallback(async () => {
    setItems([]);
    await clearCartStorage();
  }, []);

  /** Total de itens no carrinho */
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  /** Preço total */
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, total, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider');
  return context;
};

export default CartContext;

