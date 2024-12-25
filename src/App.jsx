import { useState } from 'react'
import './App.css'
import Posts from './components/posts/Posts';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Layout/> }> 
             < Route index element={ <Home />} />
             < Route path='posts' element={ <Posts /> } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
