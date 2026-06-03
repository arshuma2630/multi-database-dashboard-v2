from fastapi import APIRouter

router = APIRouter()

@router.get("/google-docs")
def get_google_docs():
    return [
        {
            "title": "Project Requirements",
            "owner": "Arshuma"
        },
        {
            "title": "Database Design",
            "owner": "Team"
        }
    ]