


import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

const jwt_password = process.env.JWT_SECRET || "tablejwtpassword";

export const userMiddleware = (req: Request,res: Response,next: NextFunction)=>{
    const header = req.headers['authorization'];
    const token = header?.split(' ')[1] as string ;
    if(!token){
        res.status(401).json({
            message : "Unauthorized"
        })
    }
    try {
        const decoded = jwt.verify(token , jwt_password) as {name : string , email : string};
        req.user.email = decoded.email;
        next();
    }catch(e){
        res.status(403).json({
            message : "Unauthorized"
        })
        return 
    } 

}