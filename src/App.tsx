
import './App.css'
import { ToDoList } from './components/ToDoStorage'

function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-600'>
      <ToDoList></ToDoList>
    </div>
  )
}

export default App
