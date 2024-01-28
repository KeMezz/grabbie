export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
  description: string;
  due: string;
  createdAt: number;
  updatedAt: number;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
}

export interface Todos {
  [key: string]: Todo[];
}
