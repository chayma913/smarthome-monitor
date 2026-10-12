
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path
from datetime import datetime
import random

app = FastAPI(
    title="SmartHome Monitor API",
    description="API de surveillance d'une maison connectée",
    version="1.0.0"
)

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/")
def home():
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/api/sensors")
def get_sensors():
    return {
        "temperature": round(random.uniform(18, 30), 1),
        "humidity": round(random.uniform(30, 70), 1),
        "light": random.randint(0, 1000),
        "motion": random.choice([True, False]),
        "updated_at": datetime.now().isoformat(timespec="seconds")
    }


@app.get("/api/health")
def health():
    return {"status": "ok", "project": "SmartHome Monitor"}
