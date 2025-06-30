const openai = require("openai").OpenAI;
const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const sessionDb = require("./utils/SessionDatabase");

// Add Gemini import
let GoogleGenAI;
try {
  GoogleGenAI = require("@google/genai").GoogleGenAI;
} catch (e) {
  // If not installed, Gemini won't be available
  GoogleGenAI = null;
}

const getPrompt = (question, schema) => {
  const prompt = `Task:Generate Kuzu Cypher statement to query a graph database.
Instructions:
Generate the Kuzu dialect of Cypher with the following rules in mind:
1. Do not omit the relationship pattern. Always use ${"`()-[]->()`"} instead of ${"`()->()`"}.
2. Do not include triple backticks ${"```"} in your response. Return only Cypher.
3. Do not return any notes or comments in your response.

Use only the provided relationship types and properties in the schema.
Do not use any other relationship types or properties that are not provided.
Schema:
${JSON.stringify(schema)}
Note: Do not include any explanations or apologies in your responses.
Do not respond to any questions that might ask anything else than for you to construct a Cypher statement.
Do not include any text except the generated Cypher statement.

The question is:
${question}
`;
  return prompt;
};

router.post("/", async (req, res) => {
  const question = req.body.question;
  const apiToken = req.body.token;
  const model = req.body.model ? req.body.model : "gpt-4o";
  const baseUrl = req.body.baseUrl;
  const llmProvider = req.body.llmProvider || "OPENAI";
  if (!apiToken || !typeof apiToken === "string" || apiToken.length === 0) {
    return res.status(400).send({ error: "The API token is missing." });
  }
  if (!question || !typeof question === "string" || question.length === 0) {
    return res
      .status(400)
      .send({ error: "The question is missing or invalid." });
  }
  let schema;
  try {
    schema = await database.getSchema();
  } catch (err) {
    return res
      .status(500)
      .send({ error: "Failed to get the schema from the database." });
  }
  let chatCompletion, prompt;
  try {
    prompt = getPrompt(question, schema);
    if (llmProvider === "GEMINI") {
      if (!GoogleGenAI) {
        return res.status(500).send({ error: "@google/genai is not installed on the server." });
      }
      const ai = new GoogleGenAI({ apiKey: apiToken });
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });
      // Gemini returns response.text
      chatCompletion = { geminiText: response.text };
    } else {
      const gptSettings = { apiKey: apiToken };
      if (baseUrl) {
        gptSettings.baseURL = baseUrl;
      }
      const gpt = new openai(gptSettings);
      chatCompletion = await gpt.chat.completions.create({
        model,
        messages: [{ role: "user", content: prompt }],
      });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ error: `The LLM API call failed: ${err}` });
  }
  let query;
  try {
    if (llmProvider === "GEMINI") {
      query = chatCompletion.geminiText;
    } else {
      query = chatCompletion.choices[0].message.content;
      query = query.split("\n").join(" ");
    }
    try {
      await sessionDb.upsertHistoryItem({
        uuid: req.body.uuid,
        isQueryGenerationMode: Boolean(req.body.isQueryGenerationMode),
        gptQuestion: question,
        cypherQuery: query,
      });
    } catch (err) {
      // Ignore the error. It fails to record the history, but the query is
      // still executed.
    }
    res.send({ query, prompt, schema, model });
  } catch (err) {
    return res
      .status(500)
      .send({ error: "Failed to extract the query from the response." });
  }
});

module.exports = router;
