import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='distantgalaxy text-6xl  font-mono '>
        Sachin's Blogs  
      </h1>
      <h2 className='battlestar text-3xl font-thin text-sky-500 '>
        <span> Made with React, FireBase and LightSabers</span>
      </h2>
      {/* <img className='w-12' src="src\assets\images\lightsaber_blue.gif" alt="" /> */}
    </>
  )
}

export default App
