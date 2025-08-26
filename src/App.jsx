import { useState } from 'react'
import Welcome from './components/Welcome';
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='p-1 sm:p-3 body-container'>
      <Welcome />
    </div>
  )
}

export default App
