import React, { useEffect } from "react";
import { Container } from "../components";
import AskGemini from "../components/AskGemini";


function Home() {
    //     const askGemini = async () => {
    //   const response = await fetch('http://localhost:5174/api/ask', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ prompt: "Write a poem about the stars." })
    //   });

    //   const data = await response.json();
    //   console.log(data.reply);
    // };

    useEffect(() => {
        document.title = "BlogApp | Home";
    }, []);

    return (
        <div className="w=full max-h-max bg-cyan-000 dark:bg-[#212121] py-4 dark:text-white text-center px-5" >
            <Container className="shadow-sm shadow-orange-400 flex flex-col justify-center gap-20 py-2" >
                <h1 className="text-xl font-bold ">“Write Freely, Publish Instantly”</h1>

                <p className="text-sm ">
                    No distractions. Just a smooth, intuitive interface built to help you express yourself — your thoughts, your voice, your stories.
                </p>

                <p>
                    Whether you're a seasoned writer or a casual blogger, this platform empowers you to:
                </p>

                <ul className="flex flex-col gap-5">
                    <li>📝 Write Blogs Easily — Add rich content with support for images, text formatting, and more.
                    </li>
                    <li>🛠️ Edit Anytime — Update your posts anytime to keep your content fresh and relevant.
                    </li>
                    <li>🌐 Read & Explore — Dive into an open world of blogs from creators around the globe.
                    </li>
                    <li>🤖 AI Writing Assistant — ✨Powered by Google Gemini ✨ to help you generate ideas, draft blogs, or even write full posts — instantly!

                    </li>

                </ul>


                {/* <p>INTEGRATE GEMINI FOR BLOG WRITING</p> */}

                {/* <AskGemini /> */}

            </Container>
        </div>
    )
}

export default Home;