// Exercício 7 e 14: Context de Pedidos - InfnetFood
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { saveOrders, getOrders } from '../services/storage';
import { simulateOrderNotifications } from '../services/notifications';

const OrderContext = createContext();

const ORDER_STATUSES = ['Confirmado', 'Em Preparo', 'Saiu para Entrega', 'Entregue'];

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    if (!loading) saveOrders(orders);
  }, [orders, loading]);

  const loadOrders = async () => {
    const saved = await getOrders();
    if (saved) setOrders(saved);
    setLoading(false);
  };

  /**
   * Cria um novo pedido a partir dos itens do carrinho
   * @param {Array} cartItems - Itens do carrinho
   * @param {number} total - Valor total
   * @param {object} deliveryInfo - Informações de entrega
   * @param {string} paymentMethod - Método de pagamento
   */
  const addOrder = useCallback(async (cartItems, total, deliveryInfo, paymentMethod) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      deliveryInfo,
      paymentMethod,
      status: ORDER_STATUSES[0],
      createdAt: new Date().toISOString(),
    };

    setOrders(prev => [newOrder, ...prev]);

    // Exercício 14: Dispara notificações simulando o fluxo do pedido
    try {
      await simulateOrderNotifications(newOrder.id);
    } catch (e) {
      console.log('Notificações não disponíveis:', e.message);
    }

    // Simula progresso do status localmente
    simulateStatusProgress(newOrder.id);

    return newOrder;
  }, []);

  /** Simula a progressão dos status de um pedido */
  const simulateStatusProgress = (orderId) => {
    ORDER_STATUSES.forEach((status, index) => {
      if (index === 0) return; // Já começa como Confirmado
      setTimeout(() => {
        setOrders(prev =>
          prev.map(order =>
            order.id === orderId ? { ...order, status } : order
          )
        );
      }, index * 8000); // A cada 8 segundos muda o status
    });
  };

  /** Remove um pedido pelo ID */
  const removeOrder = useCallback((orderId) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  }, []);

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, loading }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrders deve ser usado dentro de OrderProvider');
  return context;
};

export default OrderContext;

