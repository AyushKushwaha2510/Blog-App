// import React, { useState } from "react";
// import { Button, Input } from "./index";
// import reactLogo from '../assets/react.svg';
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import authService from "../appwrite/auth";


// // const navigate = useNavigate();
// // const dispatch = useDispatch();
// // const {resgister, handelSubmit} = useForm()
// // const [error, setError] = useState("")

// // const login = async(data) =>{

// // }


// function LogIn() {

//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const { register, handleSubmit } = useForm()
//     const [error, setError] = useState("")

//     const login = async (data) => {
//         setError("")
//         try {
//             const session = await authService.login(data)
//             if (session) {
//                 const userData = await authService.getCurrentUser()
//                 if (userData) dispatch(authLogin(userData));
//                 navigate("/")
//             }
//         } catch (error) {
//             setError(error.message)
//         }
//     }

//     return (
//         <div className="text-white w-max mx-auto h-max p-10 gap-5 justify-center flex flex-col rounded-2xl border-[0.5px] border-[#e7f3ff6a]  bg-[rgba(255,255,255,0.07)] shadow-[2px_4px_4px_5px_rgba(0,0,0,0.25)] backdrop-blur-[23.6px]">
//             <div className="flex flex-col text-center gap-1">
//                 <img src={reactLogo} alt="React Logo" className="mx-auto" />
//                 <h2>Sign in to your account</h2>
//                 <p>
//                     Don&apos;t have any account?&nbsp;
//                     <Link to="/signup"
//                         className="text-blue-200" >
//                         Sign Up
//                     </Link>
//                 </p>
//             </div>

//             {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

//             {/* Login Form */}
//             <form >
//                 <div onSubmit={handleSubmit(login)} className=" flex flex-col gap-5">
//                     {/* <Input
//                         label="email id"
//                         type="email"
//                         placeholder="Your Mail-id" /> */}
//                     <Input
//                         label="Email: "
//                         placeholder="Enter your email"
//                         type="email"
//                         {...register("email", {
//                             required: true,
//                             validate: {
//                                 matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                     "Email address must be a valid address",
//                             }
//                         })} />

//                     {/* <Input
//                         label="password"
//                         type="password"
//                         placeholder="Password" /> */}
//                     <Input
//                         label="Password: "
//                         type="password"
//                         placeholder="Enter your password"
//                         {...register("password", {
//                             required: true,
//                         })}
//                     />
//                     <Button type="Submit" className="my-5">Sign In</Button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default LogIn;

import React, { useState } from "react";
import { Button, Input } from "./index";
import reactLogo from '../assets/react.svg';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from '../store/authSlice'
import service from "../appwrite/auth";
import Logo from "./Logo";


function LogIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await service.login(data)
            if (session) {
                const userData = await service.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }));
                navigate("/all-posts")
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className="text-black dark:text-white w-max mx-auto h-max p-10 gap-5 justify-center flex flex-col rounded-2xl border-[0.5px] border-[#e7f3ff6a]  bg-[rgba(255,255,255,0.07)] shadow-[2px_4px_4px_5px_rgba(0,0,0,0.25)] backdrop-blur-[23.6px]  ">
            <div className="flex flex-col text-center gap-1 ">

                <div className=" mx-auto mb-5"><Logo /></div>
                <h2>Sign in to your account</h2>
                <p>
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className= "text-orange-700 dark:text-orange-400">
                        Sign Up
                    </Link>
                </p>
            </div>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            {/* Login Form */}
            <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5">
                <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        validate: {
                            matchPattern: (value) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                    })}
                />

                <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required"
                    })}
                />
                <Button type="submit" className="my-5">Sign In</Button>
            </form>
        </div>
    );
}

export default LogIn;