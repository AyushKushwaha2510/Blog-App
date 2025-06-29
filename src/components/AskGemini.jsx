import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key from .env
const API_KEY = "AIzaSyBY-4_HsFEvI5kPjOMH7kcQTHgNOombgWk";

function AskGemini() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    try {
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
    }
  };

  return (
    <div className="p-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something..."
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleAsk}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Ask Gemini
      </button>
      <div className="mt-4 whitespace-pre-wrap">{response}</div>
    </div>
  );
}

export default AskGemini;
