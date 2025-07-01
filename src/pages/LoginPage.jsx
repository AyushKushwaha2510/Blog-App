import React, { useEffect } from "react";
import {LogIn} from "../components"

function LoginPage() {
    useEffect(() => {
        document.title = "BlogApp | Login";
    }, []);
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[radial-gradient(62.61%_55.16%_at_38.22%_53.31%,_#F7E0C2_0%,_#F3CD6D_36.33%,_#EF9217_100%)] dark:bg-[radial-gradient(60.42%_54.69%_at_40.97%_58.15%,_#FF9100_0%,_#704905_51.79%,_#000000_100%)]">
            <LogIn />
        </div>
    );
}

export default LoginPage;