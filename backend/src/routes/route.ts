import { Router } from "express";
import { bookRouter } from "./booking/route";
import { userRouter } from "./user/route";

export const rootRoute = Router();

rootRoute.use("/user",userRouter);
rootRoute.use("/book",bookRouter);
