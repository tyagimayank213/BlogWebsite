import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className="w-full border-t-2 fixed bottom-0 bg-white py-2">
      <div className=' w-11/12 max-w-[760px] mx-auto  flex justify-between items-center  '>
        <div className="flex gap-4">
          {
            page > 1 && 
            <button 
              onClick={() => handlePageChange(page-1)}
              className='bg-purple-500 hover:bg-purple-600 py-1 px-2 border-2 border-purple-700 transition-all duration-200'
              >Previous
            </button>
          }
          {
            page < totalPages && 
            <button 
              onClick={() => handlePageChange(page+1)}
              className='bg-purple-500 hover:bg-purple-600 py-1 px-4 border-2 border-purple-700 transition-all duration-200'
            >Next
            </button>
          }
        </div>
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination