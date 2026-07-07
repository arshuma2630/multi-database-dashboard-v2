import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


# -------------------- CLASSIFY QUERY -------------------- #

# def classify_query(user_query):

#     prompt = f"""
# You are an AI classifier.

# Classify every user input into ONLY one category:

# DATABASE
# GENERAL

# DATABASE:
# - Employee records
# - Salary
# - Department
# - Role
# - Training
# - Compliance
# - Database information

# GENERAL:
# - General knowledge
# - Explanations
# - Greetings
# - Conversation
# - Personal statements
# - Emotions
# - Opinions
# - Any input that is NOT asking for database records

# User Input:
# {user_query}

# Return ONLY:
# DATABASE
# or
# GENERAL
# """

#     response = model.generate_content(prompt)

#     return response.text.strip().upper()


# -------------------- SQL GENERATION -------------------- #

def generate_sql(user_query):

    prompt = f"""
You are an expert MySQL query generator.

Database Schema:

Table: employees

Columns:
- id
- name
- department
- role
- salary

Rules:
1. Return ONLY SQL.
2. Do NOT explain.
3. Do NOT use markdown.
4. Generate only SELECT statements.

User Question:
{user_query}
"""

    response = model.generate_content(prompt)

    sql = response.text.strip()

    sql = sql.replace("```sql", "")
    sql = sql.replace("```", "")

    return sql.strip()


# -------------------- GENERAL AI -------------------- #

def answer_general_question(user_query):

    prompt = f"""
You are an intelligent enterprise AI assistant.

Answer the user's question in simple English.

Rules:
- No markdown.
- No **bold** text.
- No code blocks.
- Keep the answer within 5-8 lines.
- If the user is chatting normally, respond naturally.

User:
{user_query}
"""

    response = model.generate_content(prompt)

    return response.text.strip()