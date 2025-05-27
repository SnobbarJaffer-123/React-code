

// In features/todo/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//interface Todo {
//  id: string;
//  text: string;
//}

interface TodoState {
  todos: Todo[];
}
export interface Todo {
  id: string;
  text: string;
  
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index].text = action.payload.text;
      }
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;

