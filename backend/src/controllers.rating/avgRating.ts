import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const getAvgRating = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await DB.executeProcedure("avgRating", { lessonId: id });
    if (result.recordset.length > 0) {
      const rating = result.recordset;
      return res.status(201).json({
        message: "Average Rating Returned",
        rating: rating,
        status: "success",
      });
    } else {
      console.log(result);
      return res
        .status(400)
        .json({ message: "Failed To Return Average Rating", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default getAvgRating;
