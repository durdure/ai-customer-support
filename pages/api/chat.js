import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      if (!message || typeof message !== 'string') {
        throw new Error("Invalid input");
      }

      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: message }],
      });

      res.status(200).json({ completion: completion.choices[0].message.content });
    } catch (error) {
      console.error("OpenAI API Error:", error);  // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
