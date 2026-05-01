import "dotenv/config";
import app from "./app";

const PORT = Number(process.env.PORT); // ensure port is in number

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});