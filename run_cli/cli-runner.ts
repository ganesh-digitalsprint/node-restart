import { askQuestion } from "../src/cli";
import axios from "axios";

const run = async () => {
  try {
    const question = await askQuestion();
    console.log(`Question: ${question}`);
    const response = await axios.post("http://localhost:3000/chat", { question });
    console.log(`Answer: ${response.data.answer}`);
  } catch (err: any) {
    console.error("Error:", err?.message || err);
  }
};

run();