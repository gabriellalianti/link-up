"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthRegister = adminAuthRegister;
exports.adminAuthLogin = adminAuthLogin;
const validator_1 = __importDefault(require("validator"));
const dataStore_1 = require("../dataStore");
const crypto_1 = require("crypto");
function hashPassword(password) {
    const salt = (0, crypto_1.randomBytes)(16).toString('hex');
    const derivedKey = (0, crypto_1.scryptSync)(password, salt, 64, {
        N: 2 ** 9,
        r: 8,
        p: 2
    });
    return `${salt}:${derivedKey.toString('hex')}`;
}
function verifyPassword(password, hash) {
    const [salt, key] = hash.split(':');
    const derivedKey = (0, crypto_1.scryptSync)(password, salt, 64, {
        N: 2 ** 9,
        r: 8,
        p: 2
    });
    return key === derivedKey.toString('hex');
}
function adminAuthRegister(email, password, nameFirst, nameLast) {
    if (!validator_1.default.isEmail(email)) {
        throw new Error('Email address is not valid');
    }
    if ((0, dataStore_1.getData)().users.some((user) => user.email === email)) {
        throw new Error('Email address is already in use');
    }
    if (!/^[a-zA-Z\s\-']+$/.test(nameFirst)) {
        throw new Error('nameFirst has invalid characters');
    }
    if (nameFirst.length < 2 || nameFirst.length > 20) {
        throw new Error('nameFirst has invalid length');
    }
    if (!/^[a-zA-Z\s\-']+$/.test(nameLast)) {
        throw new Error('nameLast has invalid characters');
    }
    if (nameLast.length < 2 || nameLast.length > 20) {
        throw new Error('nameLast has invalid length');
    }
    if (password.length < 8) {
        throw new Error('password is too short');
    }
    if (!(/[a-zA-Z]/.test(password) && /\d/.test(password))) {
        throw new Error('Password does not include both a letter and a number');
    }
    const hash = hashPassword(password);
    const data = (0, dataStore_1.getData)();
    const uid = Math.floor(Math.random() * 100000);
    data.users.push({
        userId: uid,
        nameFirst: nameFirst,
        nameLast: nameLast,
        email: email,
        password: hash,
    });
    return { authUserId: uid };
}
function adminAuthLogin(email, password) {
    const data = (0, dataStore_1.getData)();
    const user = data.users.find((user) => user.email === email);
    if (!user) {
        throw new Error('Email does not exist');
    }
    if (verifyPassword(password, user.password)) {
        return { authUserId: user.userId };
    }
    else {
        throw new Error('Password is incorrect');
    }
}
