import './App.css'
import Card from './components/card'

function App() {
  {/*const [count, setCount] = useState(0)
  let myObj={
    username:"sania",
    agr:25
  }*/}

  return (
    <>

      <h1 className='bg-green-200 text-black p-4 rounded-xl'>snobbar</h1>
      <div className='flex flex-col  gap-2 p-5 md:flex-row md:gap-8 rounded-2xl bg-gray-100 m-10'>
    <Card username="snobbar jaffer" city='Srinagar' age={25}/>
    
    <Card username="seeart mustafa" city='bangloru' age={20}/>
    <Card username="shameema jaffer" city='mumbai' age={50}/>
    </div>
    </>
  )
}

export default App
