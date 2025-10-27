from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from google.genai import types
import pathlib
import os
from dotenv import load_dotenv
import base64
from gtts import gTTS
from io import BytesIO
import re

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)

# Use relative paths for PDFs
BASE_DIR = pathlib.Path(__file__).parent
pdf1 = (BASE_DIR / "Contents" / "60 hrs course plan for pre-final and final year students.pdf").read_bytes()
pdf2 = (BASE_DIR / "Contents" / "About iSpark.pdf").read_bytes()
pdf3 = (BASE_DIR / "Contents" / "Six months Diploma in Offensive Security and Digital Forensics CH.pdf").read_bytes()

# FastAPI app
app = FastAPI()

# CORS setup for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # update if your frontend uses a different port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class QuestionRequest(BaseModel):
    user_message: str

# Test route for GET /
@app.get("/")
async def root():
    return {"message": "FastAPI server is running"}

# POST /chat route
@app.post("/chat")
async def ask_question(req: QuestionRequest):
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[
                types.Content(
                    role="user",
                    parts=[
                        types.Part(inline_data={"mime_type": "application/pdf", "data": pdf1}),
                        types.Part(inline_data={"mime_type": "application/pdf", "data": pdf2}),
                        types.Part(inline_data={"mime_type": "application/pdf", "data": pdf3}),
                        types.Part(text=req.user_message),
                    ],
                )
            ],
            config=types.GenerateContentConfig(
                system_instruction=(
                    "You are iSpark Agentic AI, a text-and-voice assistant created by iSpark engineers."
                    "You are deployed on the iSpark landing page to guide visitors about iSpark’s courses and services."
                    "Act like a helpful marketing assistant: keep responses clear, concise, and engaging for students."
                    "Do not give long content unless the user asks for details."
                    "Do not greet or welcome every time — only respond naturally if the user greets you first."
                    "If the user asks for something outside the available courses or services, politely tell them to contact the iSpark team."
                    "Always maintain a confident, intelligent tone that builds trust in iSpark’s programs."
                )
            ),
        )

        
       # === Clean response text ===
        ai_text = response.text
        cleaned_text = re.sub(r"\s+", " ", ai_text).strip() 
        cleaned_text = re.sub(r"\s+", " ", cleaned_text).strip() 
        cleaned_text = re.sub(r"\*([^\*]+)\*", r"\1", ai_text) 
        cleaned_text = re.sub(r"\*\*([^\*]+)\*\*", r"<b>\1</b>", cleaned_text) 
        cleaned_text = re.sub(r"\s+", " ", cleaned_text).strip() 
        cleaned_text = re.sub(r"\*\s*(.+?):", r"**\1:**", ai_text) 
        cleaned_text = cleaned_text.replace("*", "")

        # Generate audio
        tts = gTTS(text=cleaned_text, lang='en')
        audio_buffer = BytesIO()
        tts.write_to_fp(audio_buffer)
        audio_buffer.seek(0)
        audio_base64 = base64.b64encode(audio_buffer.read()).decode('utf-8')

        return {
            "response": ai_text,
            "cleaned_response": cleaned_text,
            "audio_base64": audio_base64
        }

    except Exception as e:
        return {"error": str(e)}
