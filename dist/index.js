"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const users = {};
// Create user
app.post("/users", (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({ message: "Name and email are required." });
      return;
    }
    const id = (0, uuid_1.v4)();
    const newUser = { id, name, email };
    users[id] = newUser;
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get user by ID
app.get("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Missing user ID!" });
      return;
    }
    const user = users[id];
    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
