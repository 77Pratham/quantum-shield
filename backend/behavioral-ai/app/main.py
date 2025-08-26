# backend/behavioral-ai/app/main.py
from fastapi import FastAPI, Request
from pydantic import BaseModel

app = FastAPI(title="Behavioral Analytics (stub)")

class Event(BaseModel):
    user_id: str
    event_type: str
    payload: dict

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/ingest")
async def ingest(event: Event, request: Request):
    # placeholder: real pipeline will push to Event Hubs / Kafka
    return {"received": True, "user_id": event.user_id, "event_type": event.event_type}
