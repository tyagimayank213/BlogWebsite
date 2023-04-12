import React from 'react'
import Blog from '../Components/Blog';
import Header from '../Components/Header'
import Pagination from '../Components/Pagination';

const Home = () => {
  return (
    <div >
        <Header />
        <div className='w-11/12 max-w-[760px] mx-auto'>
            <Blog />
        </div>
        <Pagination />
        
    </div>
  )
}

export default Home