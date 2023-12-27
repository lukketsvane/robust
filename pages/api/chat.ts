// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'langchain/llms/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { message } = req.body;
    const llm = new OpenAI({ 
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: 'gpt-4-1106-preview' // specifying the model
    });

    const response = await llm.predict(message);
    res.status(200).json({ reply: response });
  } catch {
    // Catch block without direct reference to error object
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
}