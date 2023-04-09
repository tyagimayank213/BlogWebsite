import React, { useContext, useEffect } from 'react'
import Blog from './Components/Blog'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import { AppContext } from './context/AppContext'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext)

  useEffect( () => {
    fetchBlogPosts();
  }, [])
  
  return (
    <div>
      <Header />
      <Blog />
      <Pagination />
    </div>
  )
}

export default App