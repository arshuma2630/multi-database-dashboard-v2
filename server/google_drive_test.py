from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"]

flow = InstalledAppFlow.from_client_secrets_file(
    "credentials.json",
    SCOPES
)

creds = flow.run_local_server(port=0)

# SAVE TOKEN
with open("token.json", "w") as token:
    token.write(creds.to_json())

service = build("drive", "v3", credentials=creds)

results = service.files().list(
    pageSize=20,
    fields="files(id, name)"
).execute()

items = results.get("files", [])

print("\nFiles:\n")

for item in items:
    print(item["name"])