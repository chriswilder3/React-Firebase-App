import {  doc, getDoc } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import {db} from '../../firebase.js'
function Blog() {
    const {blog_id} =  useParams();
    const [blogData, setBlogData] = useState(null)

    
    
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
        console.log(blog_id);
        getSingleBlogData()
            
    },[]
    )
  return (
    <div className="mt-24 max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold poppins text-center mb-4">
                <div className="flex flex-col justify-center items-center space-x-3">
                    <span className="text-lg sm:text-xl font-medium opacity-80">{blogData ? blogData.date : ''}</span>
                    <span className="text-2xl sm:text-3xl battlestar font-semibold">{blogData ? blogData.title : ''}</span>
                </div>
            </h1>
        </div>
        
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <div className="prose fira-mono font-light lg:prose-xl text-gray-800 leading-relaxed">
                {blogData ? blogData.content : ''}
            </div>
        </div>
    </div>


  )
}

export default Blog