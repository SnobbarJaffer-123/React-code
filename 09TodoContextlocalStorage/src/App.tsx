import { useState ,useEffect} from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
 

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}


function App() {
  const [todos,setTodos]=useState<Todo[]>([])

  const addTodo =(Todo:any)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...Todo}])
  }
  const updateTodo=(id:number,Todo:any)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?Todo:prevTodo)))

  }
  const deleteTodo=(id:number)=>{
    setTodos((prev)=>(prev.filter((todo)=>todo.id!==id)))

  }
  const toggleComplete=(id:number)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  {/*useEffect(()=>{const Todos=JSON.parse(localStorage.getItem("Todos"))
    if(todos && todos.length>0){
      setTodos(Todos)

    }
  },[])*/}
  

useEffect(() => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    try {
      const todos = JSON.parse(storedTodos);
      if (Array.isArray(todos) && todos.length > 0) {
        setTodos(todos);
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage", error);
    }
  }
}, []);


  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos))},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>

       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} 
                          className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
