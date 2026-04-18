function query_knowledge(topic) {
  console.log("Calling LPI tool: query_knowledge");
  return "Knowledge retrieved for " + topic;
}

function get_case_studies(topic) {
  console.log("Calling LPI tool: get_case_studies");
  return "Case study retrieved for " + topic;
}

function get_insights(topic) {
  console.log("Calling LPI tool: get_insights");
  return "Insights retrieved for " + topic;
}

function runAgent(question) {

  try {

    if (!question || question.trim() === "") {
      console.log("Error: Please enter a valid digital twin question.");
      return;
    }

    console.log("User Question:", question);

    const knowledge = query_knowledge(question);
    const caseStudy = get_case_studies(question);
    const insight = get_insights(question);

    console.log("\nProcessing with SMILE methodology...\n");

    console.log("Knowledge:", knowledge);
    console.log("Case Study:", caseStudy);
    console.log("Insight:", insight);

    console.log("\nAgent Recommendation:");
    console.log("Start with the SMILE Reality Emulation phase.");
    console.log("Model the building system digitally.");
    console.log("Use sensor data for predictive optimization.");

  } catch (error) {
    console.log("Agent Error:", error.message);
  }
}

module.exports = { runAgent };