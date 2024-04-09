
import './App.css'
import { ToDoStorage } from './components/ToDoStorage'

function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-600'>
      <ToDoStorage></ToDoStorage>
    </div>
  )
}

export default App
