import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const fetchLessons = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await DB.executeProcedure("fetchLessons");
    if (result.recordset.length > 0) {
      const lessons = result.recordset;
      return res
        .status(201)
        .json({
          message: "Lessons Found",
          lessons: lessons,
          status: "success",
        });
    } else {
      return res
        .status(400)
        .json({ message: "Lesson not Found", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default fetchLessons;
