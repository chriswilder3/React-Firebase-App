import { useState } from 'react'
import './App.css'
import Posts from './components/posts/Posts';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import PostCreate from './components/posts/PostCreate';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Layout/> }> 
             < Route index element={ <Home />} />
             < Route path='posts' element={ <Posts /> } />
             < Route path='posts/create' element={ <PostCreate /> } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
