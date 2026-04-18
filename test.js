const { runAgent } = require("./agent");

async function runTest() {

  console.log("Running Agent Tests...\n");

  try {

    await runAgent("smart building digital twin");

    console.log("\nTest completed successfully.");

  } catch (error) {

    console.error("Test failed:", error);

  }

}

runTest();
