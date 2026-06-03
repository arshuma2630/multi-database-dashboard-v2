from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.mysql_routes import router as mysql_router
from routers.mongo_routes import router as mongo_router
from routers.google_docs_routes import router as google_docs_router
from routers.upload_routes import router as upload_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(mysql_router)
app.include_router(mongo_router)
app.include_router(google_docs_router)
app.include_router(upload_router)

@app.get("/")
def home():
    return {"message": "Multi Database Dashboard API Running"}