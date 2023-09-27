import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const updateLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { lessonTittle } = req.body;
    if (!lessonTittle)
      return res.status(400).json({ message: "Lesson tittle is required" });
    if (!id) return res.status(400).json({ message: "Lesson id is required" });

    const result = await DB.executeProcedure("updateLesson", {
      lessonId: id,
      lessonTittle: lessonTittle,
    });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(201)
        .json({ message: "Lesson Updated Successfully", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Lesson not Updated Successfully", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default updateLesson;
