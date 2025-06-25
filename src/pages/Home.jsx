import React from "react";
import { Container } from "../components";


function Home() {
    return (
        <div className="w=full max-h-max bg-cyan-000 dark:bg-cyan-950 py-4 dark:text-white text-center" >
            <Container className="shadow-sm shadow-cyan-300 flex flex-col justify-center" >
                <h1 className="text-xl font-bold ">“Write Freely, Publish Instantly”</h1>
                <p className="text-sm ">
                    No distractions. Just a clean, simple interface for you to focus on what matters — your content.
                </p>
            </Container>
        </div>
    )
}

export default Home;