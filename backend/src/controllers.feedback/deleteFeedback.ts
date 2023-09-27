import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const deleteFeedback = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "lessonId is required" });
  try {
    const result = await DB.executeProcedure("deleteFeedback", { id });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(200)
        .json({ message: "Feedback deleted successfully", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Feedback not deleted", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
};

export default deleteFeedback;
