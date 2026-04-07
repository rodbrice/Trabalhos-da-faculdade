// Exercício 14: Notificações locais simuladas - InfnetFood
let Notifications = null;

try {
  Notifications = require('expo-notifications');
  // Configuração de handler para notificações em foreground
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
} catch (error) {
  console.warn('expo-notifications não disponível:', error.message);
}

/**
 * Solicita permissão para enviar notificações
 */
export const requestNotificationPermission = async () => {
  try {
    if (!Notifications) return false;
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.warn('Permissão de notificação não disponível:', error.message);
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
    if (!Notifications) return;
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: true },
      trigger: { seconds },
    });
  } catch (error) {
    console.warn('Notificação não agendada:', error.message);
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

