import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

interface User {
  id: string;
  name: string;
  email: string;
}

const app = express();
const port = 3000;

app.use(express.json());

const users: Record<string, User> = {};

// Create user
app.post("/users", (req: Request, res: Response): void => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({ message: "Name and email are required." });
  }

  const id = uuidv4();
  const newUser: User = { id, name, email };
  users[id] = newUser;

  res.status(201).json(newUser);
});

// Get user by ID
app.get("/users/:id", (req: Request, res: Response): void => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Missing user ID!" });
  }
  const user = users[id];

  if (!user) {
    res.status(404).json({ message: "User not found." });
  }

  res.json(user);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
