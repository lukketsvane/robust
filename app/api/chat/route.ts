import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const request = await req.json();
    const { messages } = request;

    const openaiResponse = await openai.createChatCompletion({
      model: "gpt-4-0314",
      messages,
      temperature: 0.5,
      max_tokens: 150,
      stream: true,
    });

    // Assuming openaiResponse returns the expected structure
    const choices = openaiResponse.choices;
    const responseData = choices && choices.length > 0 ? choices[0].text : "No response from AI";

    return new Response(JSON.stringify({ message: responseData }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    return new Response('Error processing your request', { status: 500 });
  }
}