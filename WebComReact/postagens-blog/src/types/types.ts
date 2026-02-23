// Exercício 2: Interface Post baseada na API dummyjson.com/posts

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

// Tipos auxiliares para o sistema de feedback
export type MessageType = 'success' | 'error';

export interface FeedbackMessage {
  type: MessageType;
  text: string;
}
