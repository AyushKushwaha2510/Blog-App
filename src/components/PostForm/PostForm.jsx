// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Container, Input, Select } from "../index";
// import service from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";


// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.slug || "",
//             content: post?.content || "",
//             status: post?.status || "active"
//         }
//     });

//     const navigate = useNavigate();
//     const userData = useSelector(state =>state.user.userData)

//     const submit = async (data) => {
//         if (post) {
//             const file = data.image[0] ? service.uploadFile(data.image[0]) : null;

//             if (file) {
//                 service.deleteFile(post.featuredImage)
//             }
//             const dbPost = await service.updatePost(post.$id, {
//                 ...data,
//                 featuredImage: file ? file.$id : undefined
//             })
//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`)
//             }
//         }
//         else {
//             // improve this by checking file is present or not, before uploading
//             const file = await service.updatefile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id
//                 data.featuredImage = fileId
//                 const dbPost = await service.createPost({
//                     ...data,
//                     userId: userData.$id,
//                 })
//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`)
//                 }
//             }
//         }
//     }

//     //  IMPORTANT FOR INTERVIEWS SLUG
//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <Container>
//             <form onSubmit={handleSubmit(submit)} className="bg-amber-100">
//                 <div className="bg-amber-300 w-max">
//                     <Input
//                         label="Title :"
//                         placeholder="Title"
//                         className="mb-4"
//                         {...register("title", { required: true })}
//                     />
//                     <Input
//                         label="Slug :"
//                         placeholder="Slug"
//                         className="mb-4"
//                         {...register("slug", { required: true })}
//                         onInput={(e) => {
//                             setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                         }}
//                     />
//                     <div className=' bg-[#f9f9fa20] py-2 px-1 border border-[#e7f3ff6a] rounded-md shadow-md flex flex-col gap-1'>
//                         <label htmlFor="Blog">Blog</label>
//                         <textarea
//                             label="Content :"
//                             name="content"
//                             id='Blog'
//                             placeholder="Your Message"
//                             className="bg-[#f9f9fa20] h-6 w-70 py-2 px-1 border border-[#e7f3ff6a] rounded-md shadow-md"
//                         ></textarea>
//                     </div>

//                 </div>

//                 <div className="w-1/3 px-2">
//                     <Input
//                         label="Featured Image :"
//                         type="file"
//                         className="mb-4"
//                         accept="image/png, image/jpg, image/jpeg, image/gif"
//                         {...register("image", { required: !post })}
//                     />
//                     {post && (
//                         <div className="w-full mb-4">
//                             <img
//                                 src={appwriteService.getFilePreview(post.featuredImage)}
//                                 alt={post.title}
//                                 className="rounded-lg"
//                             />
//                         </div>
//                     )}
//                     <Select
//                         options={["active", "inactive"]}
//                         label="Status"
//                         className="mb-4"
//                         {...register("status", { required: true })}
//                     />
//                     <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                         {post ? "Update" : "Submit"}
//                     </Button>
//                 </div>
//             </form>
//         </Container>

//     )
// }



import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <label htmlFor="content">Content</label>
                <textarea
                    {...register("content", { required: true })} 
                    name="content" 
                    id="content" 
                    className="bg-[#f9f9fa20] h-6 w-70 py-2 px-1 border border-[#e7f3ff6a] rounded-md shadow-md"></textarea>
                {/* <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} /> */}
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
