import readline from "readline";
import { spawn } from "child_process";

// ─────────────────────────────────────
// Configuration
// ─────────────────────────────────────

const CONFIG = {
  mcpPath: "../dist/src/index.js",
  industry: "manufacturing",
  timeout: 10000
};

// ─────────────────────────────────────
// LPI MCP Tool Caller
// ─────────────────────────────────────

function callLPITool(toolName, args) {

  return new Promise((resolve, reject) => {

    const payload = JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: {
        name: toolName,
        arguments: args
      }
    });

    const child = spawn("node", [CONFIG.mcpPath], {
      stdio: ["pipe", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";

    const timer = setTimeout(() => {
      child.kill();
      reject(`Tool ${toolName} timeout`);
    }, CONFIG.timeout);

    child.stdout.on("data", data => {
      stdout += data.toString();
    });

    child.stderr.on("data", data => {
      stderr += data.toString();
    });

    child.on("close", code => {

      clearTimeout(timer);

      if (code !== 0) {
        reject(stderr);
      } else {
        resolve(stdout);
      }

    });

    child.stdin.write(payload);
    child.stdin.end();

  });

}

// ─────────────────────────────────────
// Fetch LPI Context
// ─────────────────────────────────────

async function fetchContext(question) {

  const calls = [
    ["query_knowledge", { query: question }],
    ["get_case_studies", { industry: CONFIG.industry }],
    ["get_insights", { scenario: question }]
  ];

  const results = await Promise.allSettled(

    calls.map(([tool, args]) =>
      callLPITool(tool, args)
        .then(data => ({
          tool,
          data,
          ok: true
        }))
    )

  );

  return results.map((r, i) => {

    if (r.status === "fulfilled") return r.value;

    return {
      tool: calls[i][0],
      data: "",
      ok: false
    };

  });

}

// ─────────────────────────────────────
// SMILE Recommendation Generator
// ─────────────────────────────────────

function generateRecommendation(question, results) {

  let context = "";

  results.forEach(r => {

    if (r.ok) {
      context += `\n${r.tool}:\n${r.data}\n`;
    }

  });

  return `
SMILE Digital Twin Recommendation

Simulate:
Create a digital model of the real-world system relevant to "${question}".

Monitor:
Use sensors and telemetry to collect real-time operational data.

Integrate:
Combine system data with enterprise systems and analytics pipelines.

Learn:
Apply machine learning and predictive analytics to detect patterns.

Execute:
Use insights to optimize operations and improve system performance.

Context Used:
${context}
`;

}

// ─────────────────────────────────────
// Agent Workflow
// ─────────────────────────────────────

async function runAgent(question) {

  const q = question.trim();

  if (!q) {
    console.log("Please enter a valid digital twin question.");
    return;
  }

  console.log("\nUser Question:", q);

  console.log("\nCalling LPI tools...\n");

  const results = await fetchContext(q);

  const success = results.filter(r => r.ok).length;

  console.log(`Retrieved context from ${success}/3 tools\n`);

  results.forEach(r => {

    const icon = r.ok ? "✓" : "✗";

    console.log(`${icon} ${r.tool}`);

    if (r.ok) console.log(r.data);

    console.log("");

  });

  const recommendation = generateRecommendation(q, results);

  console.log("────────────────────────────");
  console.log(recommendation);
  console.log("────────────────────────────");

}

// ─────────────────────────────────────
// CLI Interface
// ─────────────────────────────────────

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ask a digital twin question: ", async question => {

  try {

    await runAgent(question);

  } catch (error) {

    console.log("Agent error:", error);

  }

  rl.close();

});
