import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const getLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await DB.executeProcedure("getLesson", { lessonId: id });
    if (result.recordset.length > 0) {
      const lesson = result.recordset;
      return res
        .status(201)
        .json({ message: "Lesson Found", lesson: lesson, status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Lesson not Found", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default getLesson;
