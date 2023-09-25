import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./config/config";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
