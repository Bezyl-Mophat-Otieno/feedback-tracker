import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";
import { v4 } from "uuid";

const createLesson = async (req: Request, res: Response) => {
  const lessonId = v4();
  const { lessonTittle } = req.body;
  if (!lessonTittle)
    return res.status(400).json({ message: "Lesson tittle is required" });
  if (!lessonId)
    return res.status(400).json({ message: "Lesson id is required" });

  try {
    const result = await DB.executeProcedure("createLesson", {
      lessonTittle,
      lessonId,
    });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(201)
        .json({ message: "Lesson created", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Lesson not created", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default createLesson;
