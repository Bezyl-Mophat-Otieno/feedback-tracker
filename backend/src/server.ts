import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./config/config";
import lessonRoutes from "./routes/lesson.routes";
import ratingRouter from "./routes/rating.routes";
import feedbackRouter from "./routes/feedback.routes";
import userRouter from "./routes/user.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Routings
app.use("/api/v1/lesson", lessonRoutes);
app.use("/api/v1/rating", ratingRouter);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/user", userRouter);

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
