const { execSync } = require("child_process");

// LPI Tool: query_knowledge
function query_knowledge(topic) {
  try {
    console.log("Calling LPI tool: query_knowledge");

    // Simulated call to LPI sandbox
    const result = execSync(`echo Knowledge retrieved for "${topic}"`);

    return result.toString().trim();

  } catch (error) {
    return "Error retrieving knowledge from LPI.";
  }
}

// LPI Tool: get_case_studies
function get_case_studies(topic) {
  try {
    console.log("Calling LPI tool: get_case_studies");

    const result = execSync(`echo Case study retrieved for "${topic}"`);

    return result.toString().trim();

  } catch (error) {
    return "Error retrieving case studies from LPI.";
  }
}

// LPI Tool: get_insights
function get_insights(topic) {
  try {
    console.log("Calling LPI tool: get_insights");

    const result = execSync(`echo Insights retrieved for "${topic}"`);

    return result.toString().trim();

  } catch (error) {
    return "Error retrieving insights from LPI.";
  }
}

// Main Agent Logic
function runAgent(question) {

  try {

    // Input validation
    if (!question || question.trim() === "") {
      console.log("Error: Please enter a valid digital twin question.");
      return;
    }

    console.log("\nUser Question:", question);

    // Query LPI tools
    const knowledge = query_knowledge(question);
    const caseStudy = get_case_studies(question);
    const insight = get_insights(question);

    console.log("\nProcessing with SMILE methodology...\n");

    // Combine tool outputs
    const summary = `
Sources Used:
- query_knowledge
- get_case_studies
- get_insights

Knowledge:
${knowledge}

Case Study:
${caseStudy}

Insight:
${insight}
`;

    console.log(summary);

    // Recommendation
    console.log("Agent Recommendation:");
    console.log("1. Start with the SMILE Reality Emulation phase.");
    console.log("2. Model the real-world system digitally.");
    console.log("3. Use sensors to collect system data.");
    console.log("4. Apply analytics to optimize system performance.");

  } catch (error) {
    console.log("Agent Error:", error.message);
  }

}

module.exports = { runAgent };
