
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "你是一位幫助學生整理筆記的助手，請將內容整理成條列式重點。" },
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content;
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "API 錯誤" });
  }
}
