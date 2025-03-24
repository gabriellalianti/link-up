"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = welcome;
exports.login = login;
exports.register = register;
const auth_1 = require("../utils/auth");
function welcome(req, res) {
    return res.json({ message: "yippee" });
}
function login(req, res) {
    const { email, password } = req.body;
    try {
        return res.status(200).json({
            message: "logged in",
            userId: (0, auth_1.adminAuthLogin)(email, password)
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
}
function register(req, res) {
    const { email, password, nameFirst, nameLast } = req.body;
    try {
        return res.status(200).json({
            message: "logged in",
            userId: (0, auth_1.adminAuthRegister)(email, password, nameFirst, nameLast)
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
}
