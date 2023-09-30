import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const getRatings = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "lesson Id required" });
  try {
    const result = await DB.executeProcedure("getRatings", { lessonId: id });
    if (result.recordset.length > 0) {
      const rating = result.recordset;
      return res.status(201).json({
        message: "Lesson Ratings Returned",
        ratings: rating[0].averageRating,
        status: "success",
      });
    } else {
      return res
        .status(200)
        .json({ message: "No ratings yet", rating: 0, status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default getRatings;
