// Exercício 2: Definição de Tipos (Modelagem)

export type StatusPassagem = 'confirmado' | 'pendente' | 'cancelado';

export interface Passagem {
  id: number;
  passageiro: string;
  assento: number;
  origem: string;
  destino: string;
  data: string;
  status: StatusPassagem;
}

// Tipos auxiliares para o sistema de feedback
export type MessageType = 'success' | 'error' | 'warning';

export interface FeedbackMessage {
  type: MessageType;
  text: string;
}

// Props para botões genéricos
export type ButtonVariant = 'danger' | 'success' | 'warning' | 'primary';

