

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo,setTodos } from '../features/todo/todoSlice';
import { RootState, AppDispatch } from '../app/store';
import { Pencil, Trash2, Save } from 'lucide-react'; 
//import { nanoid } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
   completed: boolean;
}

const Todos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleUpdateClick = (todo: Todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editId && editText.trim() !== "") {
      dispatch(updateTodo({ id: editId, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  useEffect(() => {
    console.log("Current Todos:", todos);
  }, [todos]);

//local storage use
  
useEffect(() => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    try {
      const parsedTodos: Todo[] = JSON.parse(storedTodos);
      if (Array.isArray(parsedTodos)) {
        dispatch(setTodos(parsedTodos));  // Dispatch to Redux
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage", error);
    }
  }
}, [dispatch]);



  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos))},[todos])
 
  //local storage above
  return (
   
    <div className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Your Tasks</h2>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet. Add some!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-zinc-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {editId === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-md mr-4 outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              ) : (
                <span className="flex-1 text-white text-lg pr-5">{todo.text}</span>
              )}

              <div className="flex items-center gap-3">
                {editId === todo.id ? (
                  <button
                    onClick={handleSave}
                    title="Save"
                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
                  >
                    <Save className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateClick(todo)}
                    title="Edit"
                    className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition"
                  >
                    <Pencil className="w-5 h-5 " />
                  </button>
                )}

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  title="Delete"
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default Todos;
