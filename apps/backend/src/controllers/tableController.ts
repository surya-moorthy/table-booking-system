import { client } from "@repo/db/src"
import type { Request, Response } from "express";


export const getTables = async (req : Request, res : Response)=> { 
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

export const getTableByID = async (req: Request,res : Response)=> {
     try {
        const tableId = req.params.id;
        if(!tableId) {
            return;
        }

        const table = await client.table.findUnique({
            where : {
                id :tableId
            },
            select : {
                bookings : true,
                capacity: true,
                status: true,       
            }
        })

        res.status(201).json({
            table : table
        })
   
     }catch(err) {
        res.status(500).json({
            msg : "Internal server error."
        })
     }
}

export const createTable = async (req : Request , res : Response) => {
     try {
         const data = req.body;

         const tableRespone = await client.table.create({
            data : data
         })

        res.status(201).json({
            table : tableRespone
        })

     }
     catch(err) {
        res.status(500).json({
            msg : "Internal server error."
        })
     }
}

export const deleteTable = async (req : Request,res : Response) =>{
    try {
        const tableId = req.params.id;
        if(!tableId) {
            return
        }

        await client.table.delete({
            where : {
                id : tableId
            }
        })

    }catch(err) {
        res.status(500).json({
            msg : "Internal Server error"
        })
    }
}

export const updateTable = async (req : Request,res : Response) =>{
    try {
        const tableId = req.params.id;
        const data = req.body;
        if(!tableId) {
            return;
        }

        const verifyTable = await client.table.findUnique({
            where : {
                id : tableId
            }
        })

        if(!verifyTable) {
            return;
        }

        const updateTable = await client.table.update({
            where : {
                id : verifyTable.id
            },
            data : data
        })

    }catch(err) {
        res.status(500).json({
            msg : "Internal Server error"
        })
    }
}





