from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configuration
app.config['MYSQL_HOST'] = 'magino1.mysql.pythonanywhere-services.com'
app.config['MYSQL_USER'] = 'magino1'
app.config['MYSQL_PASSWORD'] = 'Elly4906'
app.config['MYSQL_DB'] = 'magino1$default'

mysql = MySQL(app)

@app.route('/feedback', methods=['POST'])
def add_feedback():
    data = request.get_json()
    cur = mysql.connection.cursor()
    cur.execute("""
        INSERT INTO feedback (first_name, last_name, phone_number, email, feedback_type, feedback_details)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (
        data['first_name'], data['last_name'], data['phone_number'],
        data['email'], data['feedback_type'], data['feedback_details']
    ))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Feedback added successfully'}), 201

@app.route('/feedback', methods=['GET'])
def get_feedback():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM feedback")
    rows = cur.fetchall()
    columns = [desc[0] for desc in cur.description]
    results = [dict(zip(columns, row)) for row in rows]
    cur.close()
    return jsonify(results)