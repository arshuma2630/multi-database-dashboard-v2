from fastapi import APIRouter, UploadFile, File
import shutil
import os
from logger import log_activity

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

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