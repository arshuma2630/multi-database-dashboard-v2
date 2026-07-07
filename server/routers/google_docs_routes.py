# from fastapi import APIRouter

# router = APIRouter()

# @router.get("/google-docs")
# def get_google_docs():
#     return [
#         {
#             "title": "Project Requirements",
#             "owner": "Arshuma"
#         },
#         {
#             "title": "Database Design",
#             "owner": "Team"
#         }
#     ]



from fastapi import APIRouter
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials

router = APIRouter()

SCOPES = [
    "https://www.googleapis.com/auth/drive.metadata.readonly"
]

@router.get("/google-docs")
def get_google_docs():

    creds = Credentials.from_authorized_user_file(
        "token.json",
        SCOPES
    )

    service = build(
        "drive",
        "v3",
        credentials=creds
    )

    results = service.files().list(
        pageSize=20,
        fields="files(id, name)"
    ).execute()

    files = results.get("files", [])

    docs = []

    for file in files:
        docs.append({
            "title": file["name"],
            "owner": "Google Drive"
        })

    return docs