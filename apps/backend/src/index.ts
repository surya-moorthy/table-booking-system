import express from "express";
import { client } from "@repo/db";

const app = express();

// Add JSON parsing middleware
app.use(express.json());

type User = {
  name: string;
  email: string;
  passwordHash: string;
};

app.post("/register", async (req, res) => {
  try {
    const body: User = req.body;

    // Ensure all fields exist
    if (!body.name || !body.email || !body.passwordHash) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const userResponse = await client.user.create({
      data: body,
    });

    res.status(201).json({
      user: userResponse.name,
      msg: "successful",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running at port 3000.");
});
