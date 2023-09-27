import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const deleteLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await DB.executeProcedure("deleteLesson", { lessonId: id });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(201)
        .json({ message: "Lesson Deleted Successfully", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Lesson not Deleted Successfully", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default deleteLesson;
