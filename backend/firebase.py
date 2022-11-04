import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class userLogin():
    def __init__(self,name,password):
        self.name = name
        self.password= password

class firestoreService():

    def __init__(self):
        self.cred = credentials.Certificate('key.json')
        try:
            self.app = firebase_admin.get_app()
        except ValueError:
            self.app = firebase_admin.initialize_app(self.cred)
        self.db = firestore.client()


    #Add document using know id, change document to document(user['name'])
    def addUser(self,user):
        doc_ref = self.db.collection(u'users').document(u'alovelace')
        doc_ref.set({
            u'first': u'AK',
            u'last': u'Lovelace',
            u'born': 1815
        })

    def getUsers(self):
        users = []
        users_ref = self.db.collection(u'users')
        docs = users_ref.stream()
        for doc in docs:
            print(f'{doc.id} => {doc.to_dict()}')
            users.append(doc.to_dict())
        return users


    #getUser with name and password
    def getUser(self,user):
        docRef = self.db.collection('users').where("usuarioImput","==",user.name).where("contraImput","==", user.password).get()
        user = docRef[0].to_dict()
        print(user)
        return user

    def getServicesFromUser(self):
        collections = self.db.collection('users').document('alovelace').collections()
        for collection in collections:
            for doc in collection.stream():
                print(doc.to_dict())

