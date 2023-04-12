import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blog = () => {

  const {posts ,loading} = useContext(AppContext);
  return (
    <div className='w-full mx-auto flex flex-col gap-6 pt-16 pb-16'>
        {
            loading ? 

            <Spinner /> :

            (posts.length === 0) ?

            <div>No Posts Found!</div> :

            (posts.map((post, index) => (
               <Card key={post.id} post={post} />
            )))
        }
    </div>
  )
}

export default Blog