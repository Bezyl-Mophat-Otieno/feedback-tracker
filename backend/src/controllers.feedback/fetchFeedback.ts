import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const fetchFeedback = async (req: Request, res: Response) => {
  try {
    const result = await DB.executeProcedure("fetchFeedback");
    if (result.recordset.length > 0) {
      return res.status(200).json({
        message: "Feedback fetched successfully",
        status: "success",
        data: result.recordset,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Feedback not fetched", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
};

export default fetchFeedback;
