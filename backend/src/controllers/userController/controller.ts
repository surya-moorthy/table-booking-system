import { Request, Response } from "express";

import * as userService from "@/services/userService"

export const registerController = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const userRegister = await userService.RegisterUser(body);

    if(!userRegister) {
        res.status(403).json({
            msg : "failed to register the user"
        })
    }

    return res.status(201).json({
      msg: "User registered successfully.",
      user: userRegister, // optional, return user info
    });
  } catch (err: any) {
    console.error(err);

    return res.status(500).json({
      msg: "Something went wrong during registration.",
      error: err.message || err,
    });
  }
};
