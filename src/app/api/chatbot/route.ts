import { NextRequest, NextResponse } from "next/server";
import { portfolioContext } from "@/data/portfolioContext";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const prompt = `
You are a portfolio assistant.
Answer ONLY using the data below.
If unsure, say "I don't know".
If asked anything outside the portfolio, say "I only answer questions about Sharon's portfolio and work."

PORTFOLIO DATA:
${portfolioContext}

QUESTION:
${message}

Max 4 sentences.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 250,
          },
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const data = await response.json();

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "No response generated.";

    return NextResponse.json({ response: reply.trim() });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";
    console.error("Gemini error:", errorMessage);
    return NextResponse.json({ error: "Chatbot failed" }, { status: 500 });
  }
}
