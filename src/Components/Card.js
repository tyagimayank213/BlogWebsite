import React from 'react'
import {FcDownRight} from "react-icons/fc"

const Card = ({post }) => {
    
  return (
    <div className='w-11/12 max-w-[760px] flex flex-col mx-auto border-x-2'>
        <div className='flex gap-2 items-center'>
          <FcDownRight fontSize="20px"/>
          <p className='text-[1.4rem] font-bold leading-10'>{post.title}</p>
        </div>
        <p className='text-sm px-2'>By <span className='italic'>{post.author}</span> on <span>{post.category}</span></p>
        <p className="text-sm px-2">Posted on <span>{post.date}</span></p>
        <p className="my-2 px-2 text-justify text-xm ">{post.content}</p>
        <div className="px-2 flex gap-2 text-blue-700 font-semibold">
            {post.tags.map( (tag, index) => {
                return <span key={index} className="text-sm">{`#${tag}`}</span>
            })}
        </div>
    </div>
  )
}

export default Card