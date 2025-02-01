"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const User_1 = require("../models/User");
class UserFactory {
    static createUser(username, password) {
        return new User_1.User({ username, password });
    }
}
exports.UserFactory = UserFactory;
