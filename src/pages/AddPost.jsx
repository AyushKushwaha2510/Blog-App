import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 dark:bg-[#212121] dark:text-white'>
        <Container className= "dark:bg-[#212121] " >
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
