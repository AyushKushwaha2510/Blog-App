import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({ $id, title, featuredImage, authorName }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full lg:min-w-80 lg:min-h-80 bg-gray-100 rounded-xl p-4 dark:bg-stone-800 dark:text-white '>
        <div className='w-full justify-center mb-4'>
          <img src={service.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl mx-auto w-full' />

        </div>
        <h2
          className='text-xl font-bold mb-5'
        >{title}</h2>
        <span className='text-[16px] mt-5'>Click to Read</span>
        <p className="text-sm text-gray-500 dark:text-gray-200 mt-1">Post By - {authorName}</p>
      </div>

    </Link>
  )
}


export default PostCard