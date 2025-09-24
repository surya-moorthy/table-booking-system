import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { bookRouter } from "./bookRouter.js";
import { tableRouter } from "./tableRouter.js";

export const rootRouter : Router = Router();

rootRouter.use("/user",userRouter);
rootRouter.use("/booking",bookRouter);
rootRouter.use("/tableRouter",tableRouter);