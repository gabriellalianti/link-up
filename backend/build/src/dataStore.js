"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setData = exports.getData = void 0;
// YOU SHOULD MODIFY THIS OBJECT BELOW ONLY
let data = {
    users: [],
    sessions: []
};
const getData = () => {
    return data;
};
exports.getData = getData;
const setData = (newData) => {
    data = newData;
};
exports.setData = setData;
