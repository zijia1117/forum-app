from datetime import datetime
from schema import UserSchema
from pymongo import MongoClient


class DB:
    DB_CONN_STR = "mongodb://root:rootooroot@10.10.0.11:27017/?authSource=admin&readPreference=primary&ssl=false"

    def __init__(self):
        self.client: MongoClient = MongoClient(DB.DB_CONN_STR)
        auth = self.client.auth
        self.users = auth.users

    def create_user(self, user: UserSchema):
        user = user.unpack(keys={"username", "email", "password"})

        result = self.users.insert_one(
            {"_dateModified": datetime.now().__str__(), **user}
        )
        return result

    def retrieve_user(self, filter: dict):
        result = self.users.find(filter)
        return result

    def update_user(self, filter: dict, user: UserSchema):
        user = user.unpack({"username", "email", "password"})

        result = self.users.update_one(filter, {"$set": user}, upsert=True)
        return result

    def delete_user(self, filter: dict) -> int:
        result = self.users.delete_one(filter)
        print(f"{result.deleted_count} record(s) deleted.")
        return result.deleted_count
