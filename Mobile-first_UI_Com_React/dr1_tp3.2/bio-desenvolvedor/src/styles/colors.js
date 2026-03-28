// Exercício 15: Paleta de cores do aplicativo
// Mantendo o padrão roxo do projeto postagens-blog

export const colors = {
  // Cores principais
  primary: '#667eea',
  primaryDark: '#764ba2',
  secondary: '#48bb78',
  
  // Feedback
  success: '#48bb78',
  warning: '#f6ad55',
  danger: '#f56565',
  info: '#4299e1',
  
  // Neutros - Tema Claro
  light: {
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#333333',
    textSecondary: '#666666',
    border: '#e0e0e0',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  
  // Neutros - Tema Escuro
  dark: {
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: '#f5f5f5',
    textSecondary: '#a0a0a0',
    border: '#404040',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
  
  // Status
  status: {
    pending: '#f6ad55',
    confirmed: '#48bb78',
    cancelled: '#f56565',
    active: '#4299e1',
  },
};

export default colors;

