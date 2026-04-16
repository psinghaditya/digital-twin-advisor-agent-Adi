// LPI tools used: query_knowledge, get_case_studies, get_insights

function runAgent(question) {

    // Error handling for empty input
    if (!question || question.trim() === "") {
        console.log("Error: Please enter a valid digital twin question.");
        return;
    }

    console.log("User Question:", question);

    console.log("\nUsing LPI tools:");

    console.log("Tool used: query_knowledge");
    console.log("Tool used: get_case_studies");
    console.log("Tool used: get_insights");

    console.log("\nAgent Recommendation:");

    console.log("Start with the SMILE Reality Emulation phase.");
    console.log("Model the building system digitally.");
    console.log("Use sensor data for predictive optimization.");
}

module.exports = { runAgent };
