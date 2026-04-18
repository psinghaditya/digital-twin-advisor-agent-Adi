# HOW_I_DID_IT

## Project Overview

I built a Digital Twin Advisor Agent that helps users understand how to implement digital twins using the SMILE methodology provided by the LPI sandbox.

The goal of the agent is to accept a user question related to digital twins and provide recommendations by combining knowledge from multiple LPI tools.

---

## Step 1 — Setting up the LPI sandbox

First, I forked and cloned the LPI Developer Kit repository.

I installed dependencies and built the sandbox:

npm install
npm run build
npm run test-client

The test client verified that all seven LPI tools were working correctly. This confirmed that the local MCP server was functioning properly.

---

## Step 2 — Running a local LLM

I installed Ollama and experimented with running local models such as Gemma and Qwen.

Running a local model helped me understand how responses could be generated using information retrieved from LPI tools.

This step helped me design the workflow for combining outputs from multiple knowledge tools.

---

## Step 3 — Building the Agent

The agent accepts a user question from the command line.

After receiving the question, the agent queries multiple LPI tools:

* query_knowledge
* get_case_studies
* get_insights

Each tool provides a different type of information.

query_knowledge retrieves conceptual knowledge about digital twins and the SMILE methodology.

get_case_studies retrieves examples of real-world digital twin implementations.

get_insights provides practical recommendations for implementing digital twins.

The agent collects outputs from these tools and combines them to generate a recommendation for the user.

---

## Step 4 — Explainability

One requirement of the challenge was explainable AI.

To address this requirement, the agent clearly shows:

* which LPI tools were used
* what data was returned from each tool
* how the final recommendation was generated

This allows users to trace the reasoning process of the agent and understand how the recommendation was produced.

---

## Challenges I Faced

The main challenge was understanding how MCP tool calls work and how to structure the agent so that it can combine outputs from multiple tools.

Another challenge was ensuring the agent remains simple while still demonstrating explainability and multi-tool reasoning.

---

## What I Would Improve

If I extended this project further, I would:

* connect directly to the MCP server for real-time tool calls
* add structured outputs such as JSON responses
* implement automated tests for reliability
* add a small web interface for easier interaction
