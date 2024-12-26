import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
function Blog() {
    const {blog_id} =  useParams();
    const [blogId, setBlogId] = useState(blog_id)

    
    console.log(blog_id);
    // setBlogId(blog_id)
    useEffect( () => {
        setBlogId(blog_id)
        const bloghead = document.querySelector('.blog-heading')
        console.log(bloghead);
    },[]
    )
  return (
    <div className='mt-24 blog-heading'>
        <h1 className='text-4xl font-semibold poppins text-sky-600 text-center'>
            Hello Welcome to the Blog 
        </h1>
         <span> 
            {blogId} 
            
        </span>
        
    </div>
  )
}

export default Blog