const { runAgent } = require("./agent");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ask a Digital Twin Question: ", (question) => {
  runAgent(question);
  rl.close();
});
