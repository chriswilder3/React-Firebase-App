import React from 'react'

function Blog({title,content, date  }) {
  return (
    
    <div className=' mt-14 '>
      {/* <h1 className='text-2xl ml-20 poppins text-center text-rose-400 my-3 '>
          Recent Posts
      </h1>    */}
        
        {/* <div className=' w-2/3 flex bg-slate-800 p-6 mx-auto flex-col justify-center'>
           
           <img className='w-1/2 self-center  my-1 bg-slate-400 p-2 rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/9/92/Skeleton_Crew.svg" alt="" />
           
           
           <div className=' flex flex-col justify-center p-2'>

              <h2 className='text-3xl poppins font-bold text-red-400'>
                 Star wars skeleton crew : Review
                </h2>
              <p className=' my-2 poppins  text-slate-300 font-serif'> 
                It has the potential to be a kids series set in 
                Star wars universe. But derives lots of overused
                and generic concepts in hollywood storytelling.
                </p>
                <a href='' className='battlestar text-center'>
                  Read Full Review ↓
                </a>
            </div>
        </div> */}

<div className=' w-2/3 flex bg-slate-800 p-6 mx-auto flex-col justify-center'>
           
           
           <div className=' flex flex-col justify-center p-2'>
                {date}
              <h2 className='text-3xl poppins font-bold text-red-400'>
                 {title}
                </h2>
              <p className=' my-2 poppins  text-slate-300 font-serif'> 
                {content}
              </p>
                
            </div>
        </div>

     


    </div>
  )
}

export default Blog