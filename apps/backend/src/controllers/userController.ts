import type { Request, Response } from "express";
import { LoginSchema, RegisterSchema } from "../types/user/user";
import * as jwt from "jsonwebtoken";
import { client } from "@repo/db/src";

const jwt_password = process.env.JWT_SECRET || "tablejwtpassword";

export async function registerController(req : Request,res : Response) {
    try {
    const result = RegisterSchema.safeParse(req.body);

    if(!result.success  ) {
        res.status(401).json({
            msg : " invalid input"
        })
        return
    }

    const userData = result.data;

    const userResponse = await client.user.create({
      data: userData,
    });

    res.status(201).json({
      user: userResponse.name,
      msg: "successful",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function loginController(req:Request,res : Response) {
    try {
         const result = LoginSchema.safeParse(req.body);

    if(!result.success) {
        res.status(401).json({
            msg : " invalid input"
        })
        return
    }

    const userData = result.data;
    
    const verifyUser = await client.user.findUnique({
        where : {
            email : userData.email
        },
        select : {
            name : true,
            email : true
        }
    });
    
    if(!verifyUser) {
        res.status(403).json({
            msg : "user is not found"
        });
        return
    }
    
    const token = await jwt.sign(verifyUser,jwt_password)

    res.status(201).json({
            msg: "successful",
            token : token
     });
     
    }catch(err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export async function resetPasswordController(req:Request,res : Response) {
    try {

         res.status(201).json({
            msg: "successful",
         });
    }catch(err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}