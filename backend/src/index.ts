import express from "express";
import { rootRoute } from "./routes/route";

const app = express();

app.use(express.json());
app.use("/api/v1",rootRoute);

app.listen("3000",()=> {
    console.log("the app is running at the port 3000.")
})