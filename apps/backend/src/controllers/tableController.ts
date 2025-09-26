import { client } from "@repo/db"
import type { Request, Response } from "express";


export const getTables = async (req : Request, res : Response)=> { 
    try {
        const tables = await client.table.findMany();
        res.json({
            msg : "table gotten successful",
            tables : tables
        })

    }catch(err) {
       res.status(500).json({ msg: "Internal Server Error" });
    } 
}