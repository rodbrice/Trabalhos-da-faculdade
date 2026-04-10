// Tipos para o Sistema de Gestão de Frota DriveRent

export type VehicleStatus = 'disponível' | 'alugado';

export interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  placa: string;
  status: VehicleStatus;
}

export type MessageType = 'success' | 'error' | 'info';

export interface FeedbackMessage {
  type: MessageType;
  text: string;
}

