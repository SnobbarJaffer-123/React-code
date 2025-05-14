//dispatch uses reducer to make changes in store
 import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { addTodo } from '../features/todo/todoSlice';
import { nanoid } from 'nanoid';
import { Todo } from '../features/todo/todoSlice'; // Ensure this is the correct path

const AddTodo: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const addTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: nanoid(),
      text: input.trim(),
      
    };

    console.log('Adding Todo:', newTodo);
    dispatch(addTodo(newTodo));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
