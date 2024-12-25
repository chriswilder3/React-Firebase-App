import React from 'react'
import PostCard from './PostCard'
function Posts() {
  
  const postlink = 'oolala'

  return (
    
    <div className=' mt-14 '>
      {/* <h1 className='text-2xl ml-20 poppins text-center text-rose-400 my-3 '>
          Recent Posts
      </h1>    */}
      
      <PostCard title='Best Star wars movies' preview=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} bloglink={postlink} />
      <PostCard title='Best Star wars movies' preview=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} bloglink={postlink} />
      
    </div>
  )
}

export default Posts