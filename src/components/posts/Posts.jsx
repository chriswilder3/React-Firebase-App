import React from 'react'

function Posts() {
  return (
    
    <div className=' '>
      <h1 className='text-2xl ml-20  my-3 rebellion '>
          Recent Posts
      </h1>   
        
        <div className=' w-2/3 flex bg-slate-800 p-6 mx-auto flex-col justify-center'>
           
           <img className='w-2/3 self-center  my-1 bg-slate-400 p-2 rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/9/92/Skeleton_Crew.svg" alt="" />
           
           
           <div className=' flex flex-col justify-center '>

              <h2 className='text-3xl font-mono font-bold text-green-400'>
                  Review : Star wars skeleton crew
                </h2>
              <p className=' poppins  text-slate-300 font-serif'> 
                It has the potential to be a kids series set in 
                Star wars universe. But derives lots of overused
                and generic concepts in hollywood storytelling.
                </p>
                <a href='' className='battlestar text-center'>
                  Read Full Review ↓
                </a>
            </div>
        </div>


    </div>
  )
}

export default Posts