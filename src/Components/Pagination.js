import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[760px] mx-auto mt-8 flex justify-between items-center mb-8 ">
      <div className="flex gap-4">
        {
          page > 1 && 
          <button 
            onClick={() => handlePageChange(page-1)}
            className='bg-purple-500 hover:bg-purple-600 p-2 border-2 border-purple-700 transition-all duration-200'
            >Previous
          </button>
        }
        {
          page < totalPages && 
          <button 
            onClick={() => handlePageChange(page+1)}
            className='bg-purple-500 hover:bg-purple-600 py-2 px-4 border-2 border-purple-700 transition-all duration-200'
          >Next
          </button>
        }
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination