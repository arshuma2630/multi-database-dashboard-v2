from fastapi import APIRouter, Query
from database.mysql import get_mysql_connection
from logger import log_activity

router = APIRouter()

@router.get("/employees")
def get_employees():

    connection = get_mysql_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM employees")

    employees = cursor.fetchall()

    cursor.close()
    connection.close()

    return employees


@router.get("/employees/search")
def search_employees(name: str = Query(...)):

    connection = get_mysql_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM employees WHERE name LIKE %s",
        (f"%{name}%",)
    )

    employees = cursor.fetchall()

    log_activity("Employee Search Performed")

    cursor.close()
    connection.close()

    return employees