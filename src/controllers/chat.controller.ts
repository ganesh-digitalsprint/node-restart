import {Request, Response} from "express";
import { chatService } from "../services/chat.service";

export const chatController = async (req: Request, res: Response) => {
    const {question}=req.body;
    const answer=await chatService(question);
    console.log(`Question: ${question}`);
    res.json({ answer });
}

