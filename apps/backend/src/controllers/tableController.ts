import { client } from "@repo/db/src"
import type { Request, Response } from "express";


export const getTables = async (req : Request, res : Response)=> { 
    console.log("email :",req.user.email);
    try {
        const tables = await client.table.findMany();
        res.json({
            msg : "table gotten successful",
            email : req.user.email,
            tables : tables
        })

    }catch(err) {
       res.status(500).json({ msg: "Internal Server Error" });
    } 
}