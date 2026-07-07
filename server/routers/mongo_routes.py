from fastapi import APIRouter, Query
from database.mongo import db
from logger import log_activity

router = APIRouter()


@router.get("/users")
def get_users():

    users = list(
        db.users.find(
            {},
            {"_id": 0}
        )
    )

    return users


@router.get("/users/search")
def search_users(name: str = Query(...)):

    users = list(
        db.users.find(
            {
                "name": {
                    "$regex": name,
                    "$options": "i"
                }
            },
            {"_id": 0}
        )
    )

    log_activity("Mongo Search Performed")

    return users