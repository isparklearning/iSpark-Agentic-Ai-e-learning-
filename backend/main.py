from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
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
genai.configure(api_key=GEMINI_API_KEY)

# Use relative paths for PDFs
BASE_DIR = pathlib.Path(__file__).parent
pdf1_path = BASE_DIR / "Contents" / "60 hrs course plan for pre-final and final year students.pdf"
pdf2_path = BASE_DIR / "Contents" / "About iSpark.pdf"
pdf3_path = BASE_DIR / "Contents" / "Six months Diploma in Offensive Security and Digital Forensics CH.pdf"

# Read PDFs into memory
pdf1 = pdf1_path.read_bytes()
pdf2 = pdf2_path.read_bytes()
pdf3 = pdf3_path.read_bytes()

# FastAPI app
app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # change if frontend port is different
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class QuestionRequest(BaseModel):
    user_message: str

# Test route
@app.get("/")
async def root():
    return {"message": "FastAPI server is running"}

# POST /chat route
@app.post("/chat")
async def ask_question(req: QuestionRequest):
    try:
        # Generate AI response
        model = genai.GenerativeModel("gemini-1.5-flash")

        response = model.generate_content([
            {
                "role": "user",
                "parts": [
                    {"inline_data": {"mime_type": "application/pdf", "data": base64.b64encode(pdf1).decode()}},
                    {"inline_data": {"mime_type": "application/pdf", "data": base64.b64encode(pdf2).decode()}},
                    {"inline_data": {"mime_type": "application/pdf", "data": base64.b64encode(pdf3).decode()}},
                    {"text": req.user_message},
                ],
            }
        ])

        ai_text = response.text or "No response from AI."

        # Clean AI response
        cleaned_text = ai_text
        cleaned_text = re.sub(r"\*\*([^\*]+)\*\*", r"<b>\1</b>", cleaned_text)  # bold formatting
        cleaned_text = re.sub(r"\*([^\*]+)\*", r"\1", cleaned_text)  # remove single asterisks
        cleaned_text = re.sub(r"\s+", " ", cleaned_text).strip()  # remove extra whitespace

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
