// DR4_TP3: Definição de Tipos para o Sistema de Reserva de Passagens

export type PassagemStatus = 'confirmado' | 'pendente' | 'cancelado';

export interface Passagem {
  id: number;
  passageiro: string;
  assento: number;
  origem: string;
  destino: string;
  data: string; // ISO date string
  status: PassagemStatus;
}

export type MessageType = 'success' | 'error' | 'info';

export interface FeedbackMessage {
  type: MessageType;
  text: string;
}

