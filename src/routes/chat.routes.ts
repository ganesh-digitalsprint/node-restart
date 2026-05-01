import { Router } from "express";
import { chatController } from "../controllers/chat.controller"

const route = Router();

route.post("/", chatController);

export default route;
