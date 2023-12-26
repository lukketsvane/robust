import { Configuration, OpenAIApi } from "openai-edge";

// Set up the OpenAI API configuration using your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const request = await req.json();
    const { messages } = request;

    const response = await openai.createChatCompletion({
      model: "gpt-4-0314",
      messages,
      temperature: 0.5,
      max_tokens: 150,
      stream: true,
    });

    return new Response(JSON.stringify({ message: response.data.choices[0].message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return new Response('Error processing your request', { status: 500 });
  }
}