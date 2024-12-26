import { collection, doc, getDoc } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import {db} from '../../firebase.js'
function Blog() {
    const {blog_id} =  useParams();
    const [blogData, setBlogData] = useState()

    
    console.log(blog_id);
    async function getSingleBlogData( ){
        const docRef = doc(db, "users",blog_id )
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            console.log(docSnap.data());
            setBlogData(docSnap.data());
        }else{
            console.log('Error. No such Doc');
        }
    }
    
    useEffect( () => {
        getSingleBlogData()
            
    },[]
    )
  return (
    <div className='mt-24 blog-heading'>
        <h1 className='text-4xl font-semibold poppins text-sky-600 text-center'>
            Hello Welcome to the Blog :
            {blogData.title}
        </h1>
         <div className='content'>
            {blogData.content}
         </div>
        
    </div>
  )
}

export default Blog