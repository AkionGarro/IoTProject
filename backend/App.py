from flask import Flask, redirect, url_for, request, jsonify

from firebase import firestoreService, userLogin
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/login',methods = ['POST', 'GET'])
@cross_origin()
def login():
   fire = firestoreService()
   name = request.form.get('name')
   password= request.form.get('password')
   userLog = userLogin(name,password)
   res = fire.getUser(userLog)
   return jsonify(res)

@app.route('/login',methods = ['POST'])
@cross_origin()
def login():
   fire = firestoreService()
   name = request.form.get('name')
   password= request.form.get('password')
   userLog = userLogin(name,password)
   res = fire.getUser(userLog)
   return jsonify(res)

app.run()