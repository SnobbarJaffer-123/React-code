

// src/contexts/TodoContext.tsx
import { createContext, useContext } from "react";

// Todo type/interface
export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

// Context type
export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: { todo: string; completed?: boolean }) => void;
  //updateTodo: (id: number, todo: string) => void;
  updateTodo: (id: number, updatedTodo: Todo) => void; 
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

// Create the context with default dummy values (will be overwritten by provider)
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// Custom hook for easy context consumption
export const useTodo = () => useContext(TodoContext);

// Export the Provider for use in App.tsx
export const TodoProvider = TodoContext.Provider;
