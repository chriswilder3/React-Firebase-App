import React from 'react'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
function Posts() {
  
  const postlink = 'oolala'

  return (
    
    <div className=' mt-24 flex flex-col items-center '>
      <h1 className='text-xl poppins font-bold text-center text-sky-600 my-3 '>
          Post a new blog 
      <Link to='/posts/create' className=' ml-1 py-2 px-8 text-lg text-white font-bold bg-sky-600 mx-auto rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 ease-in-out shadow-md transform'>
        Create
      </Link>
      </h1>    
      
      <PostCard title='Best Star wars movies' preview=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} bloglink={postlink} />
      <PostCard title='Best Star wars movies' preview=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} bloglink={postlink} />
      
    </div>
  )
}

export default Posts