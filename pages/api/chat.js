import OpenAI from "openai";

const openai = new OpenAI(
    {
        apiKey: process.env.OPENAI_API_KEY,
    }
);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { message } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [{role: 'system', content: systemPrompt}, ...data], 
            model: 'gpt-4o', 
            stream: true, 
          });
        const response = await processChatRequest(message);
        res.status(200).json(response);
      } catch (error) {
        console.error('Error in /api/chat:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }