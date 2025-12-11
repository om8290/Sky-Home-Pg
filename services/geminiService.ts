import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  // Initialize AI client only if API key is present
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI", error);
}

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm currently offline. Please call the numbers listed on the page for assistance.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        // Using a lower thinking budget or disabling it for simple Q&A to ensure speed
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "I didn't quite catch that. Please try asking again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting right now. Please call us directly.";
  }
};