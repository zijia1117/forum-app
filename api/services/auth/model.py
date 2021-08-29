from schema import UserSchema
from db import DB


class UserModel:
    def __init__(self):
        self.db = DB()

    def register(self, username, email, password):
        err: list[str] = []
        # check if username or email already exists.
        # 1. check username
        res_username_check = self.db.retrieve_user(filter={"username": username})
        if res_username_check.count() > 0:
            err.append(f"username `{username}` already exists!")
        # 2. check email
        res_email_check = self.db.retrieve_user(filter={"email": email})
        if res_email_check.count() > 0:
            err.append(f"email `{email}` already exists!")

        user = UserSchema(
            {
                "username": username,
                "password": password,
                "email": email,
            }
        )

        if len(err) > 0:
            return err

        inserted_id = self.db.create_user(user).inserted_id
        return UserSchema(self.db.retrieve_user({"_id": inserted_id})[0])

    def login(self, email, password):
        res = self.db.retrieve_user({"email": email})

        if res.count() == 0:
            return None

        user = UserSchema(res[0])
        # check password
        if password != user.password:
            return None

        return user

    def get_profile(self, username):
        res = self.db.retrieve_user({"username": username})

        if res.count() == 0:
            return None
        user = UserSchema(res[0])
        return user

    def get_users(self):
        res = self.db.retrieve_user({})
        return [UserSchema(u).unpack() for u in res]
