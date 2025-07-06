import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useLoaderData } from 'react-router-dom';
import { all } from 'axios';

function AllPosts() {
    const posts = useLoaderData()
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     appwriteService.getPosts([]).then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])

    useEffect(() => {
        document.title = "All Posts";
    }, []);

    return (
        <div className=' py-8 px-3 flex justify-center dark:bg-[#212121] '>
            <Container className="dark:bg-[#313131] shadow-sm  shadow-orange-400 ">
                <div className='flex flex-wrap justify-evenly'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4 lg:mx-20 lg:my-10' >
                            <PostCard {...post} userId={post.userId}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts

// export const postLoader = async () => {
//     const allPosts = appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//     return allPosts;
// }


// loader will start data fetching when you hover at link
export const postLoader = async () => {
    const posts = await appwriteService.getPosts([]);
    return posts?.documents || [];
};
