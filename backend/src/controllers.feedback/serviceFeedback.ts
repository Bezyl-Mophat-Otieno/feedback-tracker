import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const serviceFeedback = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "lessonId is required" });
  try {
    const result = await DB.executeProcedure("serviceFeedback", { id });
    if (result.rowsAffected[0] > 0) {
      return res
        .status(200)
        .json({ message: "Feedback serviced successfully", status: "success" });
    } else {
      return res
        .status(400)
        .json({ message: "Feedback not serviced", status: "failed" });
    }
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ message: error.message, status: "failed" });
  }
};

export default serviceFeedback;
