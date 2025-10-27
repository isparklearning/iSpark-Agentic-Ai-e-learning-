# app.py
import base64
import json
import time
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import mysql.connector
import os

# ---------------- CONFIG ----------------
CONFIG_PATH = 'zoom_config.json'
if not os.path.exists(CONFIG_PATH):
    raise RuntimeError("Missing zoom_config.json - fill with account_id, client_id, client_secret")

with open(CONFIG_PATH, 'r') as f:
    ZOOM = json.load(f)

ACCOUNT_ID = ZOOM.get('account_id')
CLIENT_ID = ZOOM.get('client_id')
CLIENT_SECRET = ZOOM.get('client_secret')
USER_ID = ZOOM.get('user_id', 'me')

if not ACCOUNT_ID or not CLIENT_ID or not CLIENT_SECRET:
    raise RuntimeError("zoom_config.json must contain account_id, client_id and client_secret")

TOKEN_CACHE = {'access_token': None, 'expires_at': 0}

# MySQL Connection Settings (update if needed)
DB_CONFIG = {
    'host': 'localhost',
    'user': 'zoomuser',
    'password': 'zoompass',
    'database': 'elearning'
}
# ----------------------------------------

app = Flask(__name__)
CORS(app)


def get_connection():
    return mysql.connector.connect(**DB_CONFIG)


def get_access_token():
    """
    Server-to-Server OAuth token exchange.
    POST https://zoom.us/oauth/token?grant_type=account_credentials&account_id=...
    Basic auth: client_id:client_secret
    """
    now = time.time()
    if TOKEN_CACHE['access_token'] and TOKEN_CACHE['expires_at'] - 60 > now:
        return TOKEN_CACHE['access_token']

    token_url = f"https://zoom.us/oauth/token?grant_type=account_credentials&account_id={ACCOUNT_ID}"
    auth_raw = f"{CLIENT_ID}:{CLIENT_SECRET}"
    auth_header = base64.b64encode(auth_raw.encode()).decode()
    headers = {"Authorization": f"Basic {auth_header}"}

    res = requests.post(token_url, headers=headers)
    if res.status_code != 200:
        # helpful debugging output
        raise RuntimeError(f"Failed to get Zoom token: {res.status_code} {res.text}")

    data = res.json()
    access_token = data.get('access_token')
    expires_in = data.get('expires_in', 3600)
    TOKEN_CACHE['access_token'] = access_token
    TOKEN_CACHE['expires_at'] = now + int(expires_in)
    return access_token


@app.route('/create_meeting', methods=['POST'])
def create_meeting():
    """
    Create Zoom meeting and save to MySQL.
    POST JSON: { "topic": "...", "start_time": "ISO", "duration": 60 }
    """
    payload = request.json or {}
    topic = payload.get('topic', 'Live Class')
    start_time = payload.get('start_time', datetime.utcnow().isoformat() + 'Z')
    duration = int(payload.get('duration', 60))

    try:
        token = get_access_token()
    except Exception as e:
        return jsonify({"error": "token_error", "message": str(e)}), 500

    url = f"https://api.zoom.us/v2/users/{USER_ID}/meetings"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    body = {
        "topic": topic,
        "type": 2,
        "start_time": start_time,
        "duration": duration,
        "settings": {
            "host_video": True,
            "participant_video": True,
            "join_before_host": False
        }
    }

    resp = requests.post(url, headers=headers, json=body)
    if resp.status_code not in (201, 200):
        return jsonify({"error": "zoom_api_error", "status_code": resp.status_code, "body": resp.text}), 400

    data = resp.json()
    join_url = data.get('join_url')
    start_url = data.get('start_url')
    meeting_id = str(data.get('id'))

    # Save to MySQL
    conn = get_connection()
    cur = conn.cursor()
    sql = """
        INSERT INTO meetings (zoom_meeting_id, topic, start_time, duration, join_url, start_url, raw_json, created_at)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    cur.execute(sql, (meeting_id, topic, start_time, duration, join_url, start_url, json.dumps(data), datetime.utcnow().isoformat()))
    conn.commit()
    meet_id = cur.lastrowid
    cur.close()
    conn.close()

    return jsonify({
        "id": meet_id,
        "zoom_meeting_id": meeting_id,
        "topic": topic,
        "start_time": start_time,
        "duration": duration,
        "join_url": join_url,
        "start_url": start_url,
    }), 201


@app.route('/meetings', methods=['GET'])
def list_meetings():
    conn = get_connection()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT id, zoom_meeting_id, topic, start_time, duration, join_url, start_url, created_at FROM meetings ORDER BY id DESC")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(rows)


@app.route('/meeting/<int:meet_id>', methods=['GET'])
def get_meeting(meet_id):
    conn = get_connection()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT * FROM meetings WHERE id = %s", (meet_id,))
    row = cur.fetchone()
    cur.close()
    conn.close()
    if not row:
        return jsonify({"error": "not_found"}), 404
    return jsonify(row)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"ok": True})


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    print("✅ Backend running on port", port)
    app.run(host='0.0.0.0', port=port, debug=True)