const { runAgent } = require("./agent");
const readline = require("readline");

// If question passed as command argument
const argQuestion = process.argv.slice(2).join(" ");

if (argQuestion) {
  console.log("Running Digital Twin Advisor Agent...\n");
  runAgent(argQuestion);
} else {
  // Interactive mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ask a Digital Twin Question: ", (question) => {
    runAgent(question);
    rl.close();
  });
}