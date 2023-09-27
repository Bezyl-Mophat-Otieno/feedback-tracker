import { Router } from "express";
import createLesson from "../controllers.lesson/createLesson";
import getLesson from "../controllers.lesson/getLesson";
import fetchLessons from "../controllers.lesson/fetchLessons";
import deleteLesson from "../controllers.lesson/deleteLesson";
import updateLesson from "../controllers.lesson/updateLesson";

const lessonRoutes = Router();
lessonRoutes.post("/create", createLesson);
lessonRoutes.get("/get/:id", getLesson);
lessonRoutes.get("/fetch", fetchLessons);
lessonRoutes.put("/update/:id", updateLesson);
lessonRoutes.delete("/delete/:id", deleteLesson);

export default lessonRoutes;
