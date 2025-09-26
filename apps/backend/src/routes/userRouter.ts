import { Router } from "express";
import { loginController, registerController, resetPasswordController } from "../controllers/userController.js";

export const userRouter : Router = Router();

userRouter.post("/register",registerController);
userRouter.post("/login",loginController);
userRouter.post("/reset-password",resetPasswordController);
