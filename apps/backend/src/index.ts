import express from "express";
import { client } from "@repo/db";

const app = express();

// Add JSON parsing middleware
app.use(express.json());


app.post("/register", async (req, res) => {
 
});

app.listen(3000, () => {
  console.log("Server is running at port 3000.");
});
