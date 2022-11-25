class userLogin():
    def __init__(self,username,password):
        self.username = username
        self.password=password

class userRegister():
    def __init__(self,username,password,email):
        self.username = username
        self.password=password
        self.email = email


class userDevice():
    def __init__(self,name, category,user):
        self.name = name
        self.category = category
        self.user = user
