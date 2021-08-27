from bson import ObjectId
from bson import datetime


class UserSchema:
    _id: ObjectId
    dateModified: datetime.datetime
    username: str
    password: str
    email: str

    def __init__(self, data: dict):
        self._id = data["_id"] if "_id" in data.keys() else None
        self.dateModified = (
            data["dateModified"] if "_dateModified" in data.keys() else None
        )
        self.username = data["username"]
        self.password = data["password"]
        self.email = data["email"]

    def unpack(self, keys: list[str] = [], exclude: list[str] = []):
        data = {
            "_id": self._id.__str__(),
            "username": self.username,
            "password": self.password,
            "email": self.email,
            "dateModified": self.dateModified,
        }
        if keys == []:
            keys = data.keys()
        # return {key: data[key] if key not in exclude else None for key in keys}
        return {key: data[key] for key in keys}
