import { client } from "@repo/db/src";
import { Request, Response } from "express";

export const createBooking = async (req : Request,res : Response) => {
   try {
    const user = req.user.userId;
    const tableId = req.params.tableid;

    if (user == "" ) {
        return;
    }
    if( tableId == "") {
        return;
    }

    const bookingResponse = await client.booking.create({
        data : {
            status : "PROGRESS",
            tableId : tableId as string,
            userId : user,            
        },
        select : {
            status : true,
            bookedAt : true
        }
    })

    res.status(201).json({
        msg : "booking in progress",
        booking : bookingResponse
    })

   } catch(err) {
    res.status(500).json({
        msg : "Internal Server error"
    })
   }
}

export const SuccessBooking =  async (req : Request,res : Response) => {
      try {
         const bookingId = req.params.bookingid;
             if( bookingId == "") {
                return;
            }
         const updateResponse = await client.booking.update({
            where : {
                id : bookingId as string
            },
            data : {
                status : "SUCCESS"
            }
         })

     res.status(201).json({
        msg : "booking successful",
        booking : updateResponse
    })

    } catch(err) {
        res.status(500).json({
            msg : "Internal Server error"
        })
    }
}

export const cancelBooking =  async (req : Request,res : Response) => {
      try {
         const bookingId = req.params.bookingid;
             if( bookingId == "") {
                return;
            }
         const deleteResponse = await client.booking.delete({
            where : {
                id : bookingId as string
            }
         })

     res.status(201).json({
        msg : "booking cancelled",
        booking : deleteResponse
    })

    } catch(err) {
        res.status(500).json({
            msg : "Internal Server error"
        })
    }
}