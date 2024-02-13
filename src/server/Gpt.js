const openai = require("openai").OpenAI;
const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const sessionDb = require("./utils/SessionDatabase");

const getPrompt = (question, schema) => {
  const prompt = `Task:Generate Cypher statement for Kùzu Graph Database Mangagement System to query a graph database.
Instructions:
Generate statement with Kùzu Cypher dialect (rather than standard):
  1. do not use "WHERE EXISTS" clause to check the existence of a property because Kùzu database has a fixed schema.
  2. do not omit relationship pattern. Always use "()-[]->()" instead of "()->()".
  3. do not include any notes or comments even if the statement does not produce the expected result.
Use only the provided relationship types and properties in the schema.
Do not use any other relationship types or properties that are not provided.
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
  const model = req.body.model ? req.body.model : "gpt-3.5-turbo";
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
