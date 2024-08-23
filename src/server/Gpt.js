const openai = require("openai").OpenAI;
const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const sessionDb = require("./utils/SessionDatabase");

const getPrompt = (question, schema) => {
  const prompt = `Task: Generate a Cypher query for the Kùzu Graph Database Mangagement System to query a graph database.
Instructions:
Generate the Kùzu dialect of Cypher with the following rules in mind:
    1. Always use the relationship pattern. For example, use "()-[]->()" instead of "()-->()".
    3. Only use node or relationship types, and properties that are provided in the schema below.
Schema:
${JSON.stringify(schema)}
Note: Do not include any explanations or apologies in your responses.
Do not respond to any questions that might ask anything else than for you to construct a Cypher statement.
Do not include any text except the generated Cypher statement.

The question is:
${question}"
`;
  return prompt;
};

router.post("/", async (req, res) => {
  const question = req.body.question;
  const apiToken = req.body.token;
  const model = req.body.model ? req.body.model : "gpt-4o";
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
    delete schema.relGroups;
  } catch (err) {
    return res
      .status(500)
      .send({ error: "Failed to get the schema from the database." });
  }
  let chatCompletion, prompt;
  try {
    prompt = getPrompt(question, schema);
    const gpt = new openai({ apiKey: apiToken });
    chatCompletion = await gpt.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
    });
  } catch (err) {
    return res
      .status(500)
      .send({ error: `The OpenAI API call failed: ${err}` });
  }
  let query;
  try {
    query = chatCompletion.choices[0].message.content;
    query = query.split("\n").join(" ");
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
