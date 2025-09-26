import { Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware";
import { createTable, deleteTable, getTableByID, getTables, updateTable } from "../controllers/tableController";
import { adminMiddleware } from "../middleware/adminMiddleware";

export const tableRouter : Router = Router();

tableRouter.get("/",userMiddleware,getTables);
tableRouter.use("/:id",userMiddleware,getTableByID);
tableRouter.use("/",adminMiddleware,createTable);
tableRouter.use("/:id",adminMiddleware,deleteTable);
tableRouter.use("/:id",adminMiddleware,updateTable);
