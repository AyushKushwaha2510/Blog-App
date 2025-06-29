import React from "react";
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
    return (
        <div className="w=full max-h-max bg-cyan-000 dark:bg-cyan-950 py-4 dark:text-white text-center px-5" >
            <Container className="shadow-sm shadow-cyan-300 flex flex-col justify-center gap-20" >
                <h1 className="text-xl font-bold ">“Write Freely, Publish Instantly”</h1>
                <p className="text-sm ">
                    No distractions. Just a clean, simple interface for you to focus on what matters — your content.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate rerum ad doloremque nihil esse nemo repellat iste veniam porro!
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo, reiciendis quaerat incidunt hic voluptas inventore porro accusamus deleniti nostrum soluta dicta minima aliquid id maiores unde asperiores illo! Iure debitis, quibusdam accusantium soluta neque exercitationem dicta autem porro corrupti distinctio assumenda nobis, deserunt amet, atque illum saepe aperiam. Ea perferendis tenetur consequuntur minima. Quisquam facilis atque maxime sit vel voluptates, quis temporibus, eligendi cumque autem expedita dolor quae minima iste? Expedita, ex, officia doloribus fugiat similique architecto sequi pariatur quia corporis praesentium dolorem natus, vitae possimus tempora maxime cupiditate cumque iste doloremque! Odio nihil repudiandae cum beatae minus quis.


                <p>INTEGRATE GEMINI FOR BLOG WRITING</p>
                
                <AskGemini />

            </Container>
        </div>
    )
}

export default Home;