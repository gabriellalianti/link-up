import { Router } from "express";
import { login, register, welcome } from "../controllers/home.controller";

class HomeRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", welcome);
    this.router.get("/login", login);
    this.router.get("/register", register);
  }
}

export default new HomeRoutes().router;