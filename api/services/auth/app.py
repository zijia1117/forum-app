import json
from schema import UserSchema
from model import UserModel
from flask.app import Flask
from flask import request
from model import UserModel
from json import dump, dumps


app = Flask(__name__)
model = UserModel()


@app.post("/login")
def login():
    email = request.json["email"]
    password = request.json["password"]

    res = model.login(email, password)

    if res is None:
        return {"error": "Invalid email or password."}
    else:
        # transform search result into UserSchema object
        return res.unpack()


@app.post("/register")
def register():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]

    res = model.register(username, email, password)

    if type(res) is list:
        return {"error": f"registration failed.", "errors": res}
    else:
        return res.unpack()


@app.get("/user/<string:username>")
def user(username):
    res = model.get_profile(username)

    if res is None:
        return {"error": "User does not exists."}
    else:
        # transform search result into UserSchema object
        return res.unpack(exclude=["password"])


@app.get("/users/")
def all_users():
    res = model.get_users()

    if res is None:
        return json.dumps([])
    else:
        # transform search result into UserSchema object
        return json.dumps(res)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
