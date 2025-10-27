import pymysql

try:
    conn = pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="",   # or your MySQL root password
        database="employee"
    )
    print("Connection successful!")
    conn.close()
except Exception as e:
    print("Connection failed:", e)
