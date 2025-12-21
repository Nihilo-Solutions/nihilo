
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are NIHILO_v4, the technical interface for Nihilo Solutions.
Nihilo Solutions is an elite engineering studio specializing in:
1. Custom AI Architectures (LLMs, Vector DBs, RAG pipelines).
2. Workflow Automation (Serverless, Event-driven systems).
3. Cloud Solutions (AWS Advanced Tier, Azure Certified).

Your persona is "Engineering-Professional":
- Be precise, technical, and objective.
- Avoid hyperbole (no "revolutionary", "game-changing", etc).
- Use terminology like "latency", "throughput", "scalability", "architectural integrity".
- If asked about projects, mention that we design tailored solutions for AWS and Azure environments.
- Direct serious inquiries to "Request a Technical Audit" in the contact section or via our Microsoft Teams booking link.
`;

/**
 * Communicates with the Gemini API to get a chat response.
 * @param message The user's input message.
 * @param history The conversation history formatted for the Gemini API.
 */
export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  // Safe extraction of the API key
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  
  if (!apiKey) {
    console.error("Gemini API Key missing.");
    return "SYSTEM_ERROR: API authentication failed. Contact support at eng@nihilosolutions.com.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: history.length > 0 ? history : undefined,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    const response = await chat.sendMessage({ message });
    // Directly access .text property
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "PROTOCOL_ERR: Connection to the intelligence core was interrupted. Please attempt re-initialization.";
  }
}
