import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";
import { v4 } from "uuid";

const addFeedback = async (req: Request, res: Response) => {
  const id = v4();
  const { lessonId, feedback } = req.body;
  if (!lessonId || !feedback)
    return res
      .status(400)
      .json({ message: "lessonId and feedback are required" });

  try {
    const result = await DB.executeProcedure("addFeedback", {
      lessonId,
      feedback,
      id,
    });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(200)
        .json({ message: "Feedback added successfully", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Feedback not added", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
};

export default addFeedback;
