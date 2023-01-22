export interface Todo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export type CreateTodoRequest = Pick<Todo, 'title' | 'content'>;
