"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/", home_controller_1.welcome);
        this.router.get("/login", home_controller_1.login);
        this.router.get("/register", home_controller_1.register);
    }
}
exports.default = new HomeRoutes().router;
