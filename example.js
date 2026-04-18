const { runAgent } = require("./agent");
const readline = require("readline");

// If question passed as command argument
const argQuestion = process.argv.slice(2).join(" ");

async function startAgent(question) {
  try {
    await runAgent(question);
  } catch (error) {
    console.error("Agent Error:", error);
  }
}

if (argQuestion) {

  console.log("Running Digital Twin Advisor Agent...\n");

  startAgent(argQuestion);

} else {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ask a Digital Twin Question: ", async (question) => {

    await startAgent(question);

    rl.close();

  });

}
