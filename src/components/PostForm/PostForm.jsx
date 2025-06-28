import React from "react";
import { useForm } from "react-hook-form";
import { Container, Input } from "../index";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues:{
            title:post
        }
    })


    return (
        <Container>
            <form className="bg-amber-100">
                <div className="bg-amber-300 w-max">
                    <Input
                        label="Title"
                        placeholder="Title"
                    />
                    <Input
                        label="Slug"
                        placeholder="Slug"
                    />
                    <div className=' bg-[#f9f9fa20] py-2 px-1 border border-[#e7f3ff6a] rounded-md shadow-md flex flex-col gap-1'>
                <label htmlFor="Blog">Blog</label>
                <textarea
                    id='Blog'
                    placeholder="Your Message"
                    className="bg-[#f9f9fa20] h-6 w-70 py-2 px-1 border border-[#e7f3ff6a] rounded-md shadow-md"
                ></textarea>
            </div>
                        
                </div>
            </form>
        </Container>

    )
}

