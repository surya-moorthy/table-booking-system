


import type { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { ROLE } from "../types/express";

const jwt_password = process.env.JWT_SECRET || "tablejwtpassword";

export const adminMiddleware = (req: Request,res: Response,next: NextFunction)=>{
    const header = req.headers['authorization'];
    const token = header?.split(' ')[1] as string ;
    console.log(token)
    if(!token){
        res.status(401).json({
            message : "Unauthorized"
        })
    }
    try {
        const decoded = jwt.verify(token , jwt_password) as {name : string , email : string,role : ROLE};
        if(decoded.role !== ROLE.ADMIN) {
            res.status(403).json({
                msg : "Unauthorized."
            })
            return
        }
        req.user = decoded;
        next();
    }catch(e){
        res.status(403).json({
            err : e,
            message : "Unauthorized"
        })
        return 
    } 

}