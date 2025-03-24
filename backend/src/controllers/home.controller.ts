import { Request, Response } from "express";
import {adminAuthLogin, adminAuthRegister} from "../utils/auth";

export function welcome(req: Request, res: Response): Response {
  return res.json({ message: "yippee" });
}

export function login(req: Request, res: Response): Response {
  const {email, password} = req.body;
  try {
    return res.status(200).json({
      message: "logged in",
      userId: adminAuthLogin(email, password)
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err.message
    });
  }
}

export function register(req: Request, res: Response) : Response {
  const {email, password, nameFirst, nameLast} = req.body;
  try {
    return res.status(200).json({
      message: "logged in",
      userId: adminAuthRegister(email, password, nameFirst, nameLast)
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err.message
    });
  }
}