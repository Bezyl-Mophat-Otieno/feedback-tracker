import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const updateFeedback = async (req: Request, res: Response) => {
  const { id, feedback } = req.body;
  if (!id || !feedback)
    return res
      .status(400)
      .json({ message: "lessonId and feedback are required" });

  try {
    const result = await DB.executeProcedure("updateFeedback", {
      id,
      feedback,
    });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(200)
        .json({ message: "Feedback updated successfully", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Feedback not updated", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
};

export default updateFeedback;
