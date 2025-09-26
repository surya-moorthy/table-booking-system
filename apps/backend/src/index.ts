import express from "express";
import { rootRouter } from "./routes/route.js";

const app = express();

// Add JSON parsing middleware
app.use(express.json());
app.use("/api/v1",rootRouter);

app.listen(3000, () => {
  console.log("Server is running at port 3000.");
});
