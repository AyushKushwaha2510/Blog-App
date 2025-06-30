import React, { useEffect } from "react";
import {SignUp} from "../components";

function SignUpPage() {
    useEffect(() => {
        document.title = "BlogApp | SignIn";
    }, []);
    return (
        <div className="bg-blue-500 w-full h-screen flex justify-center items-center bg-[radial-gradient(83%_29.5%_at_50%_70.5%,_#085BB4_0%,_#074A91_27.88%,_#052649_100%)]">
            <SignUp />
        </div>
    );
}

export default SignUpPage;