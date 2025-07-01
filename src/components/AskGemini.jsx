import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from "./Button";
import conf from "../conf/conf";
// Load API key from .env
const API_KEY = conf.geminiApiKey;
console.log("API KEY = ", API_KEY);

function AskGemini() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // <-- NEW


  const handleAsk = async () => {
    try {

      setLoading(true);      // Start loading
      setResponse("");       // Clear previous response

      const genAI = new GoogleGenerativeAI(API_KEY);

      // Use gemini-1.5-pro or gemini-pro (if supported)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(prompt);
      const res = result.response;
      const text = res.text();

      setResponse(text);
    } catch (error) {
      console.error("Gemini Error:", error);
      setResponse("⚠️ Error: Unable to get response from Gemini.");
    } finally {
      setLoading(false); // ✅ Ensure this always runs
    }
  };

  return (
    <div className="flex flex-col">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Gemini is here to help you write the post... 
        ( please give a word limit also )"
        className="min-h-25 bg-[#f9f9fa20] w-70 py-2 px-1 border dark:border-[#e7f3ff6a] border-[#61616150] rounded-md shadow-md"
      />
      <Button
        onClick={handleAsk}
        className="my-2 mx-auto w-max text-sm bg-blue-600 text-white rounded"
      >
        Ask Gemini
      </Button>
      <div className="min-height-50 mb-2 bg-[#f9f9fa20] w-70 py-2 px-1 border dark:border-[#e7f3ff6a] border-[#61616150] rounded-md shadow-mdwhitespace-pre-wrap">
        {loading ? (
          <span className="text-gray-500 animate-pulse">Loading response from Gemini...</span>
        ) : (
          response
        )}
      </div>
    </div>
  );
}

export default AskGemini;
