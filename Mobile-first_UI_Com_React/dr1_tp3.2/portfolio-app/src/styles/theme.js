// Tema centralizado do aplicativo
// Define cores, espaçamentos e estilos consistentes

export const theme = {
  // Cores principais
  colors: {
    primary: '#667eea',
    primaryDark: '#5568d3',
    secondary: '#764ba2',
    
    // Cores de fundo
    background: '#f5f7fa',
    surface: '#ffffff',
    
    // Cores de texto
    text: '#333333',
    textSecondary: '#666666',
    textLight: '#999999',
    
    // Cores de estado
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#f44336',
    info: '#2196F3',
    
    // Cores do tema escuro
    darkBackground: '#121212',
    darkSurface: '#1e1e1e',
    darkText: '#ffffff',
    darkTextSecondary: '#b0b0b0',
    
    // Cores de borda
    border: '#e0e0e0',
    borderDark: '#333333',
  },
  
  // Espaçamentos padronizados
  spacing: {
    xs: 4,
    sm: 8,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 40,
  },
  
  // Tamanhos de fonte
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    huge: 32,
  },
  
  // Bordas arredondadas
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    round: 50,
  },
  
  // Sombras
  shadow: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};

