import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const getAvgRating = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await DB.executeProcedure("avgRating", { lessonId: id });
    if (result.recordset.length > 0) {
      const rating: any = result.recordset;
      return res.status(201).json({
        message: "Average Rating Returned",
        rating: rating[0].averageRating,
        status: "success",
      });
    } else {
      console.log(result);
      return res
        .status(200)
        .json({ message: "Lesson Not Rated", rating: 0, status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default getAvgRating;
