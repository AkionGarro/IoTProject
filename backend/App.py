from flask import Flask, request, jsonify

from firebase import firestoreService
from flask_cors import CORS, cross_origin
import json

from models import userLogin, userRegister

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/login',methods = ['POST', 'GET'])
@cross_origin()
def login():
   fire = firestoreService()
   name = request.form.get('username')
   password= request.form.get('password')
   userLog = userLogin(name,password)
   res = fire.getUser(userLog)
   return jsonify(res)

@app.route('/register', methods=['POST', 'GET'])
@cross_origin()
def register():
    fire = firestoreService()
    email = request.form.get('email')
    username = request.form.get('username')
    password = request.form.get('password')
    userLog = userRegister(username, password,email)
    res = fire.addUser(userLog)
    return jsonify(res)

app.run()