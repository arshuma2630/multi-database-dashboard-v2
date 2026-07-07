from fastapi import APIRouter, UploadFile, File
import shutil
import os
from logger import log_activity

router = APIRouter()


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    print("Uploading:", file.filename)
    print("Current Directory:", os.getcwd())

    log_activity("File Uploaded")

    with open(f"uploads/{file.filename}", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "File uploaded successfully",
        "filename": file.filename
    }


@router.get("/files")
def get_files():

    files = os.listdir("uploads")

    return files


@router.delete("/files/{filename}")
def delete_file(filename: str):

    file_path = f"uploads/{filename}"

    if os.path.exists(file_path):

        os.remove(file_path)

        log_activity(f"File Deleted: {filename}")

        return {
            "message": "File deleted successfully"
        }

    return {
        "message": "File not found"
    }