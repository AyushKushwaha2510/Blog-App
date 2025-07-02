import React, { useState } from "react";
import { Button, Input } from "./index";
import reactLogo from '../assets/react.svg';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import Logo from "./Logo";


function SignUp() {

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/all-posts")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="text-black dark:text-white w-max mx-auto h-max p-10 gap-5 justify-center flex flex-col rounded-2xl border-[0.5px] border-[#e7f3ff6a]  bg-[rgba(255,255,255,0.07)] shadow-[2px_4px_4px_5px_rgba(0,0,0,0.25)] backdrop-blur-[23.6px]">
            <div className="flex flex-col text-center gap-1">
                <div className=" mx-auto mb-5"><Logo /></div>                <h2>Create your Blog Account</h2>
                <p>
                    Already have an account?&nbsp;
                    <Link to="/login" className="text-orange-700 dark:text-orange-400">
                        LogIn
                    </Link>
                </p>

            </div>

            {/* Login Form */}
            {/* <form >
                <div className=" flex flex-col gap-5">
                    <Input
                        label="Full Name"
                        type="text"
                        placeholder="User Name"
                        />
                    <Input
                        label="email id"
                        type="email"
                        placeholder="Your Mail-id" />
                    <Input
                        label="password"
                        type="password"
                        placeholder="Password" />
                    <Button type="submit" className="my-5">Create Account</Button>
                </div>
            </form> */}
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;