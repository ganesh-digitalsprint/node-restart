import express from "express";
import chatRoute from "./routes/chat.routes";

const app = express();
app.use(express.json());

// Register routes
app.use("/chat", chatRoute);

export default app;