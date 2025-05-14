//Redux->single source of truth(single store),state must be read only that is like u should not modify/mutate ur state and changes should be made through reducers/functions only

//react is a predictable state container for js apps

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
 

  return (
    <>
     <div className='bg-green-300 rounded-sm p-10 m-10'>

      <AddTodo/>
      <Todos/>
      </div>
      
    </>
  )
}

export default App
