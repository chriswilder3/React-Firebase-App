import React from 'react'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
function Posts() {
  
  const postlink = 'oolala'

  return (
    
    <div className=' mt-14 flex flex-col '>
      <h1 className='text-4xl poppins  text-center text-sky-600 my-3 '>
          Post a new blog
      </h1>    
      <Link to='/posts/create' className='py-2 text-3xl font-semibold px-8 bg-sky-600 mx-auto rounded '>
        +
      </Link>
      <PostCard title='Best Star wars movies' preview=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} bloglink={postlink} />
      <PostCard title='Best Star wars movies' preview=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} bloglink={postlink} />
      
    </div>
  )
}

export default Posts