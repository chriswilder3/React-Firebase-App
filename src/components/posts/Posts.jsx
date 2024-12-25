import React from 'react'
import Blog from './Blog'
function Posts() {
  return (
    
    <div className=' mt-14 '>
      {/* <h1 className='text-2xl ml-20 poppins text-center text-rose-400 my-3 '>
          Recent Posts
      </h1>    */}
      
      <Blog title='Best Star wars movies' content=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} />
      <Blog title='Best Star wars movies' content=' Never mind' date={ `${new Date( Date.now()).toLocaleDateString()}`} />
      
    </div>
  )
}

export default Posts