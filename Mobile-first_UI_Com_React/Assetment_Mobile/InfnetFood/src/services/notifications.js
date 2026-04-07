// Exercício 14: Notificações locais simuladas - InfnetFood
import * as Notifications from 'expo-notifications';

// Configuração de handler para notificações em foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

/**
 * Solicita permissão para enviar notificações
 */
export const requestNotificationPermission = async () => {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Erro ao solicitar permissão de notificação:', error);
    return false;
  }
};

/**
 * Agenda uma notificação local
 * @param {string} title - Título da notificação
 * @param {string} body - Corpo da notificação
 * @param {number} seconds - Segundos para exibir a notificação
 */
export const scheduleNotification = async (title, body, seconds = 1) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: true },
      trigger: { seconds },
    });
  } catch (error) {
    console.error('Erro ao agendar notificação:', error);
  }
};

/**
 * Simula o fluxo de notificações de um pedido
 * @param {string} orderId - ID do pedido
 */
export const simulateOrderNotifications = async (orderId) => {
  const shortId = String(orderId).slice(-4);
  await scheduleNotification(
    '✅ Pedido Confirmado!',
    `Seu pedido #${shortId} foi recebido pelo restaurante.`,
    2
  );
  await scheduleNotification(
    '👨‍🍳 Em Preparo',
    `Seu pedido #${shortId} está sendo preparado.`,
    8
  );
  await scheduleNotification(
    '🛵 Saiu para Entrega!',
    `Seu pedido #${shortId} está a caminho!`,
    15
  );
  await scheduleNotification(
    '🎉 Pedido Entregue!',
    `Seu pedido #${shortId} foi entregue. Bom apetite!`,
    25
  );
};

export default {
  requestNotificationPermission,
  scheduleNotification,
  simulateOrderNotifications,
};

