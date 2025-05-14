import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'



export const store = configureStore({
    reducer: {
      todos: todoReducer, // ✅ KEY added here
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
