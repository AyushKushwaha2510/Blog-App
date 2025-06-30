import React, { useEffect } from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  useEffect(() => {
        document.title = "Add Post";
    }, []);
  return (
    <div className='py-8 dark:bg-[#212121] dark:text-white'>
        <Container className= "dark:bg-[#212121] " >
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
