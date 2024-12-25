import { useState } from 'react'
import './App.css'
import Posts from './components/posts/Posts';
import Navbar from './components/navbar/Navbar';
function App() {
 

  return (
    <>
      <Navbar />
      <h1 className="distantgalaxy text-6xl font-mono text-center my-5 text-yellow-400 drop-shadow-lg">
        Sachin's Blogs
      </h1>
      <h2 className="battlestar text-3xl font-thin text-sky-400 text-center">
        <span>Made with React, Firebase, and Lightsabers</span>
      </h2>
      <Posts />
    </>
  )
}

export default App
