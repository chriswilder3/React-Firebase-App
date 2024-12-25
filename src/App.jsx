import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-semibold '>
        Welcome to FireBase React App
      </h1>
    </>
  )
}

export default App
