from copy import error
from typing import Any
import unittest
from model import UserModel


class ModelTest(unittest.TestCase):
    def test_user_registration(self):
        model = UserModel()
        res = None
        try:
            res = model.register("user", "lll", "password")
        except Exception as e:
            print(f"{e}")

        self.assertIsNotNone(res)
