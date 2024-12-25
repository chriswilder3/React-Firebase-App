import { useState } from 'react'
import './App.css'
import Posts from './components/posts/Posts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='distantgalaxy text-6xl  font-mono text-center '>
        Sachin's Blogs  
      </h1>
      <h2 className='battlestar text-3xl font-thin text-sky-500 text-center '>
        <span> Made with React, FireBase and LightSabers</span>
      </h2>
      {/* <img className='w-12' src="src\assets\images\lightsaber_blue.gif" alt="" /> */}
      <Posts />
    </>
  )
}

export default App
