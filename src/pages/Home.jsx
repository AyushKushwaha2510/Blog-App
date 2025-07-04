import React, { useEffect } from "react";
import { Container } from "../components";
import AskGemini from "../components/AskGemini";
import FeatureCard from "../components/Feature Card";


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
            <Container className="shadow-sm shadow-orange-400 flex flex-col justify-center gap-10 py-2" >
                <h1 className="text-xl lg:text-4xl font-bold whitespace-nowrap text-center bg-[linear-gradient(90deg,_#FF8903_10.74%,_#EA00EE_98.8%)] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,_#FF8903_10.71%,_#EA00EE_203.05%)] dark:bg-clip-text dark:text-transparent">“Write Freely, Publish Instantly”</h1>

                <p className="text-sm lg:text-xl dark:text-orange-50">
                    No distractions. Just a smooth, intuitive interface built to help you express yourself — your thoughts, your voice, your stories.
                </p>

                <p className="text-sm lg:text-xl font-semibold dark:text-orange-100">
                    Whether you're a seasoned writer or a casual blogger, this platform empowers you to:
                </p>

                <div className="flex flex-col gap-6 mx-auto mb-5 md:flex-row lg:gap-8 ">
                    <FeatureCard featureHead="Write Blogs Easily" feature="Add rich content with support for images, text formatting, and more." />
                    <FeatureCard featureHead="Edit Anytime" feature="Update your posts anytime to keep your content fresh and relevant." />
                    <FeatureCard featureHead="Read & Explore" feature="Dive into an open world of blogs from creators around the globe." />
                    <FeatureCard featureHead="AI Writing Assistant" feature="✨Powered by Google Gemini ✨ to help you generate ideas, draft blogs, or even write full posts — instantly!" />
                </div>



                {/* <p>INTEGRATE GEMINI FOR BLOG WRITING</p> */}

                {/* <AskGemini /> */}

            </Container>
        </div>
    )
}

export default Home;