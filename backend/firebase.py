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


