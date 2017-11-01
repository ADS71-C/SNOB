from eve import Eve
from eve.auth import BasicAuth
from hashlib import sha256

credentials = {
    'ds_snobby_snob': '9bdb3836dca316ea906890abd3bacc31f26abaedfdba416442bc846e64288ed3'
}


class MyBasicAuth(BasicAuth):
    def check_auth(self, username, password, allowed_roles, resource, method):
        if username not in credentials:
            return False
        return credentials[username] == sha256(password.encode('utf-8')).hexdigest()


app = Eve(auth=MyBasicAuth)

if __name__ == '__main__':
    app.run()
