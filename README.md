# Digital Twin Advisor Agent

An AI-style advisor that helps plan Digital Twin implementations using the SMILE methodology.

## Features
- Queries knowledge base using LPI tools
- Retrieves real-world digital twin case studies
- Provides implementation insights
- Generates recommendations for digital twin deployment

## LPI Tools Used

This agent queries the LPI knowledge base using the following tools:

- query_knowledge – retrieves digital twin knowledge entries
- get_case_studies – retrieves real-world digital twin case studies
- get_insights – provides implementation insights and recommendations

These tools allow the agent to gather expert knowledge and generate recommendations.

## Setup Instructions

1. Clone the repository

git clone https://github.com/psinghaditya/digital-twin-advisor-agent-Adi

2. Navigate into the folder

cd digital-twin-advisor-agent-Adi

3. Install dependencies

npm install

4. Run the agent

npm start

Example input:

smart building digital twin

## Error Handling

The agent validates user input before querying LPI tools.
If the user provides empty or invalid input, the agent returns a helpful message instead of failing.

## Author
Aditya Pratap Singh
Project updated for evaluation
### Update
Evaluation trigger update
Improve README with LPI tools and setup instructions
