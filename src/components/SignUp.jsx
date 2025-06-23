import React from "react";
import {Button, Input} from "./index";
import reactLogo from '../assets/react.svg';


function SignUp() {
    return (
        <div className="text-white w-max mx-auto h-max p-10 gap-5 justify-center flex flex-col rounded-2xl border-[0.5px] border-[#e7f3ff6a]  bg-[rgba(255,255,255,0.07)] shadow-[2px_4px_4px_5px_rgba(0,0,0,0.25)] backdrop-blur-[23.6px]">
            <div className="flex flex-col text-center gap-1">
                <img src={reactLogo} alt="React Logo" className="mx-auto" />
                <h2>Create your Blog Account</h2>
                
            </div>

            {/* Login Form */}
            <form >
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
            </form>
        </div>
    )
}

export default SignUp;