from fastapi import APIRouter
from pydantic import BaseModel

from ai.gemini import (
    generate_sql,
    answer_general_question
)

from database.mysql import get_mysql_connection

router = APIRouter()


class QueryRequest(BaseModel):
    query: str


@router.post("/ask-query")
def ask_query(request: QueryRequest):

    query = request.query.lower()

    # Database-related keywords
    db_keywords = [
        "employee",
        "employees",
        "department",
        "salary",
        "role",
        "hr",
        "operations",
        "cybersecurity",
        "training",
        "records"
    ]

    is_database = any(keyword in query for keyword in db_keywords)

    # ---------------- DATABASE ---------------- #

    if is_database:

        generated_sql = generate_sql(request.query)

        generated_sql = (
            generated_sql.replace("```sql", "")
            .replace("```", "")
            .strip()
        )

        if not generated_sql.upper().startswith("SELECT"):
            return {
                "type": "ERROR",
                "message": "Only SELECT queries are allowed."
            }

        connection = get_mysql_connection()
        cursor = connection.cursor(dictionary=True)

        cursor.execute(generated_sql)

        results = cursor.fetchall()

        cursor.close()
        connection.close()

        return {
            "type": "DATABASE",
            "generated_sql": generated_sql,
            "results": results
        }

    # ---------------- GENERAL ---------------- #

    answer = answer_general_question(request.query)

    return {
        "type": "GENERAL",
        "answer": answer
    }