import { Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware.js";
import { getTables } from "../controllers/tableController.js";

export const tableRouter : Router = Router();

tableRouter.use(userMiddleware);
tableRouter.use("/",getTables);
// tableRouter.use("/",getTableByID);
// tableRouter.use("/",createTable);
// tableRouter.use("/",deleteTable);
// tableRouter.use("/",updateTable);
