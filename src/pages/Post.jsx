import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    // let previewUrl = null

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    // console.log("post is", (post), typeof (post));
                    // console.log("featured image", post.featuredImage, typeof (post.featuredImage));

                    const url = service.getFilePreview(post.featuredImage);
                    // console.log("URL of post ", service.getFilePreview(post.featuredImage), typeof (service.getFilePreview(post.featuredImage)));

                    setPreviewUrl(url); // ✅ trigger re-render
                    // console.log("preview url ", previewUrl, typeof (previewUrl));

                }
                else navigate("/");
                // console.log("type of featured image", typeof (post.featuredImage));
                // console.log("you are in POST.jsx , preview URL is " , previewUrl)

            });
        } else navigate("/");
    }, [slug, navigate, previewUrl]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    useEffect(() => {
        document.title = "Post";
    }, []);

    return post ? (
        <div className="py-8 dark:bg-[#212121] dark:text-white ">
            <Container className="flex flex-col lg:flex-row gap-20" >
                <div className="">


                    <div className="w-full flex flex-col justify-center mb-4 border rounded-xl p-2">
                        {/* {console.log("you are in div.jsx , preview URL is ", previewUrl)} */}
                        {previewUrl ? (
                            <img src={previewUrl} alt={post?.title} className="rounded-xl mx-auto lg:max-w-120" />
                        ) : (
                            <p className="text-center">Loading image...</p>
                        )}
                    </div>
                </div>



                <div className="flex flex-col justify-around">
                    <div className="w-full mb-6">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                    </div>


                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                    <p className="text-sm text-gray-800 font-semibold my-5 mt-10 lg:m-0">Post By - {post.authorName || "Unknown Author"}</p>

                    <div>
                        {isAuthor && (
                            <div className="mx-auto mt-5 w-max">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500 hover:bg-green-700" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500 hover:bg-red-700" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                </div>


            </Container>
        </div>
    ) : null;
}
