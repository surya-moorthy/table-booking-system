import { Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware";
import { getTables } from "../controllers/tableController";

export const tableRouter : Router = Router();

tableRouter.use(userMiddleware);
tableRouter.get("/",getTables);
// tableRouter.use("/",getTableByID);
// tableRouter.use("/",createTable);
// tableRouter.use("/",deleteTable);
// tableRouter.use("/",updateTable);
