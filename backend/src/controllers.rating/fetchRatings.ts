import DB from "../database/dbHelpers/db";
import { Response, Request } from "express";

const fetchRatings = async (req: Request, res: Response) => {
  try {
    const result = await DB.executeProcedure("fetchRatings");
    if (result.recordset.length > 0) {
      const rating = result.recordset;
      return res.status(201).json({
        message: "Average Ratings Returned",
        ratings: rating,
        status: "success",
      });
    } else {
      return res
        .status(400)
        .json({ message: "Failed To Return Average Rating", status: "failed" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export default fetchRatings;
