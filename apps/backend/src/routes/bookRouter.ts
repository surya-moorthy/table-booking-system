import { Request, Response, Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware";
import { cancelBooking, createBooking, SuccessBooking } from "../controllers/bookingController";
import { adminMiddleware } from "../middleware/adminMiddleware";

export const bookRouter : Router = Router();

bookRouter.post("/",userMiddleware,createBooking);
bookRouter.put("/:id",adminMiddleware,SuccessBooking);
bookRouter.delete("/:id",userMiddleware,cancelBooking); 