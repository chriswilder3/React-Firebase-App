import React from 'react'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
import {db} from '../../firebase.js'
import { getDocs, collection } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'


function Posts() {
  
  const [posts, setPosts] = useState([])

  async function getAllBlogs() {
    const querySnapshot = await getDocs(collection(db,"users"))

    const PostsArray = querySnapshot.docs.map( (doc) => {
      return doc.data()
    })
    console.log(PostsArray, typeof PostsArray);

    setPosts(PostsArray)

    // console.log('posts : '  , posts);
  }
  useEffect( ()=> {
    getAllBlogs();
    
  }, [])



  return (
    
    <div className=' mt-24 flex flex-col items-center '>
      <h1 className='text-xl poppins font-bold text-center text-sky-600 my-3 '>
          Post a new blog 
      <Link to='/posts/create' className=' ml-1 py-2 px-8 text-lg text-white font-bold bg-sky-600 mx-auto rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 ease-in-out shadow-md transform'>
        Create
      </Link>
      </h1>    


      { 
        // Render the Postcard only there are posts obtained
        // from DB.

          posts.length > 0 &&
          posts.map(post => {
            const blogData = post
            return <PostCard title={blogData.title} preview={blogData.content} date={'Now'} bloglink={'ok'} />
          })
        
      }
      
      {/* <PostCard title={title} preview=' Never mind' date={content} bloglink={postlink} /> */}
      
      
    </div>
  )
}

export default Posts