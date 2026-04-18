# Digital Twin Advisor Agent

An AI-style advisor that helps plan **Digital Twin implementations** using the **SMILE methodology**.

---

## Features

* Queries knowledge base using **LPI tools**
* Retrieves real-world digital twin case studies
* Provides implementation insights
* Generates recommendations for digital twin deployment
* Demonstrates explainable reasoning using tool outputs

---

## LPI Tools Used

This agent queries the LPI knowledge base using the following tools:

* **query_knowledge** – retrieves digital twin knowledge entries
* **get_case_studies** – retrieves real-world digital twin case studies
* **get_insights** – provides implementation insights and recommendations

These tools allow the agent to gather structured knowledge and combine outputs from multiple sources to generate recommendations.

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/psinghaditya/digital-twin-advisor-agent-Adi
```

### 2. Navigate into the project folder

```bash
cd digital-twin-advisor-agent-Adi
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the agent

```bash
npm start
```

Example input:

```
smart building digital twin
```

---

## Error Handling

The agent validates user input before querying LPI tools.

If the user provides empty or invalid input, the agent returns a helpful message instead of failing.

Example:

```
Error: Please enter a valid digital twin question.
```

---

## Architecture

The Digital Twin Advisor Agent processes user queries and retrieves relevant knowledge using LPI tools.

```
User Question
      ↓
Digital Twin Advisor Agent
      ↓
LPI Tool Calls
• query_knowledge
• get_case_studies
• get_insights
      ↓
Processing & Reasoning (SMILE methodology)
      ↓
Recommendation Output
```

---

## Example Output

```
User Question: smart building digital twin

Using LPI tools:
Tool used: query_knowledge
Tool used: get_case_studies
Tool used: get_insights

Processing with SMILE methodology...

Agent Recommendation:
1. Start with the SMILE Reality Emulation phase.
2. Model the system digitally to replicate real-world behaviour.
3. Use sensor data to monitor system performance.
4. Apply predictive analytics for optimization.
```

---

## Author

Aditya Pratap Singh
Digital Twin Advisor Agent – LPI Developer Kit submission.

---

## Update

Evaluation trigger update
Improved README with LPI tools and setup instructions.
