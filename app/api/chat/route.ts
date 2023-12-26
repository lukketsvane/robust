import { Configuration, OpenAIApi } from "openai-edge";

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
      max_tokens: 150, // You can adjust the max tokens as needed
      stream: true,
    });

    // Format and send the response back to the client
    return new Response(JSON.stringify(response.data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    // Return a generic error response
    return new Response('Error processing your request', { status: 500 });
  }
}