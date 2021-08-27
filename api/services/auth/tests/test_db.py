from model import UserSchema
from bson.objectid import ObjectId
from pymongo.results import UpdateResult
from db import DB
from pprint import pprint
import unittest


class DBTest(unittest.TestCase):
    def test_create_user(self):
        db = DB()
        user = UserSchema(
            {
                "username": "username",
                "password": "password",
                "email": "test@email.com",
            }
        )
        result = db.create_user(user)

        self.assertIsNotNone(result.inserted_id, msg="Insertion failed!")
        # clean up
        del_res = db.delete_user(filter={"_id": result.inserted_id})
        print("cleaned up!" if del_res != 0 else "clean up failed!")

    def test_update_user(self):
        db = DB()

        user = UserSchema(
            {
                "email": "test@example.com",
                "username": "username",
                "password": "password",
            }
        )

        _id = ObjectId("60f00872e57d34b743c7430f")

        result = db.update_user(filter={"_id": _id}, user=user)

        print(f"{result.modified_count} record(s) was modified.")
        pprint(db.users.find({"_id": _id})[0])

    def test_retrieve_user(self):
        db = DB()
        _id = ObjectId("60f00872e57d34b743c7430f")
        res = db.retrieve_user(filter={"_id": _id})
        user = res[0]
        self.assertEquals(user["_id"], _id)
