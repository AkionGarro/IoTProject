import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from models import userRegister, userLogin


class firestoreService():
    def __init__(self):
        self.cred = credentials.Certificate('key.json')
        try:
            self.app = firebase_admin.get_app()
        except ValueError:
            self.app = firebase_admin.initialize_app(self.cred)
        self.db = firestore.client()

    def addUser(self, user):
        checkUser = self.db.collection('Users').where("username", "==", user.username).get()
        if checkUser == []:
            doc_ref = self.db.collection('Users').document(user.username)
            doc_ref.set({
                'email': user.email,
                'password': user.password,
                'username': user.username
            })
            res = {'result': 'Sucess'}
            return res
        else:
            res = {'result': 'Change Username'}
            return res

    def getUser(self, user):
        docRef = self.db.collection('Users').where("username", "==", user.username).get()
        if docRef != []:
            userRes = docRef[0].to_dict()
            if userRes['password'] == user.password:
                print(userRes)
                return userRes
            else:
                print('Wrong Password')
                return None;
        else:
            print('No se encuentra el usuario')
            return None;

    def addUserDevice(self, device):
        doc_ref = self.db.collection('Devices').document()
        doc_ref.set({
            'name': device.name,
            'category': device.category,
            'user': device.user,
            'id': doc_ref.id,
            'created': firestore.SERVER_TIMESTAMP
        })
        res = {'result': 'Success',
               'Id': doc_ref.id}
        return res

    def getUserDevices(self, username):
        docs = self.db.collection('Devices').where("user", "==", username).get()
        services = []
        for doc in docs:
            print(f'{doc.id} => {doc.to_dict()}')
            services.append(doc.to_dict())
        return services

    def getDeviceById(self, id):
        docs = self.db.collection('Devices').where("id", "==", id).get()
        if docs != []:
            serviceRes = docs[0].to_dict()
            return serviceRes
        else:
            print('No se encuentra el dispositivo')
            return None;

    def addMeasurment(self):
        doc_ref = self.db.collection('Measurement').document()
        doc_ref.set({
            'idDevice': 'DJNaQ1aM5vydXalVpy4x',
            'id': doc_ref.id,
            'measurement':
                [{
                    "value": 287,
                    "name": "3/20/2022"
                }, {
                    "value": 1455,
                    "name": "4/26/2022"
                }, {
                    "value": 1701,
                    "name": "3/5/2022"
                }, {
                    "value": 1876,
                    "name": "1/18/2022"
                }, {
                    "value": 2583,
                    "name": "12/8/2021"
                }, {
                    "value": 2148,
                    "name": "7/25/2022"
                }, {
                    "value": 1917,
                    "name": "7/31/2022"
                }, {
                    "value": 287,
                    "name": "5/1/2022"
                }, {
                    "value": 2750,
                    "name": "7/17/2022"
                }, {
                    "value": 2081,
                    "name": "11/1/2022"
                }, {
                    "value": 360,
                    "name": "12/9/2021"
                }, {
                    "value": 2395,
                    "name": "12/30/2021"
                }, {
                    "value": 1210,
                    "name": "1/31/2022"
                }, {
                    "value": 1302,
                    "name": "11/21/2022"
                }, {
                    "value": 2674,
                    "name": "10/1/2022"
                }, {
                    "value": 1848,
                    "name": "8/4/2022"
                }, {
                    "value": 2023,
                    "name": "8/25/2022"
                }, {
                    "value": 598,
                    "name": "2/27/2022"
                }, {
                    "value": 347,
                    "name": "6/16/2022"
                }, {
                    "value": 1391,
                    "name": "1/21/2022"
                }, {
                    "value": 1954,
                    "name": "12/25/2021"
                }, {
                    "value": 1764,
                    "name": "4/18/2022"
                }, {
                    "value": 806,
                    "name": "12/25/2021"
                }, {
                    "value": 988,
                    "name": "5/3/2022"
                }, {
                    "value": 465,
                    "name": "2/4/2022"
                }, {
                    "value": 419,
                    "name": "4/1/2022"
                }, {
                    "value": 2938,
                    "name": "11/1/2022"
                }, {
                    "value": 1510,
                    "name": "5/18/2022"
                }, {
                    "value": 257,
                    "name": "7/24/2022"
                }, {
                    "value": 1355,
                    "name": "2/10/2022"
                }]

        })

    def getMeasurement(self,id):
        docs = self.db.collection('Measurement').where("idDevice", "==", id).get()
        if docs !=[]:
            measurement = docs[0].to_dict()
            print(measurement)
            return measurement

        else:
            return None;
