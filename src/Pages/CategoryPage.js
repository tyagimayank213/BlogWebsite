import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Blog from '../Components/Blog'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("%20", " ");

  return (
    <div>
        <Header />
        <div className="relative flex gap-4 top-[4.5rem] mb-[3rem] w-11/12 max-w-[760px] justify-start mx-auto">
            <button 
                onClick={() => navigate(-1)} 
                className='bg-purple-500 hover:bg-purple-600 py-1 px-4 border-2 border-purple-700 transition-all duration-200 font-semibold text-lg cursor-pointer'>Back
            </button>
            <h2 className='text-2xl font-bold text-gray-800'>Blogs Category <span>#{category}</span></h2>
        </div>
        <div className='w-11/12 max-w-[760px] mx-auto'>
            <Blog />
        </div>
        <Pagination />
    </div>
  )
}

export default CategoryPage