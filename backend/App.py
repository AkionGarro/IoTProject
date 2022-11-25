from flask import Flask, request, jsonify

from firebase import firestoreService
from flask_cors import CORS, cross_origin
import json

from models import userLogin, userRegister, userDevice

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

@app.route('/addDevice', methods=['POST', 'GET'])
@cross_origin()
def addDevice():
    fire = firestoreService()
    name = request.form.get('name')
    category = request.form.get('category')
    user = request.form.get('user')
    device = userDevice(name, category,user)
    res = fire.addUserDevice(device)
    return jsonify(res)

@app.route('/getUserDevices', methods=['POST', 'GET'])
@cross_origin()
def getDevices():
    fire = firestoreService()
    user = request.form.get('user')
    res = fire.getUserDevices(user)
    return jsonify(res)


@app.route('/getDeviceById', methods=['POST', 'GET'])
@cross_origin()
def getDevice():
    fire = firestoreService()
    id = request.form.get('id')
    res = fire.getDeviceById(id)
    return jsonify(res)

@app.route('/getMeasurementById', methods=['POST', 'GET'])
@cross_origin()
def getMeasurementById():
    fire = firestoreService()
    id = request.form.get('idDevice')
    res = fire.getMeasurement(id)
    return jsonify(res)


app.run()