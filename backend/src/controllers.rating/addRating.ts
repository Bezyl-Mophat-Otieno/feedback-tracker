import { Response, Request } from "express";
import DB from "../database/dbHelpers/db";

const addRating = async (req: Request, res: Response) => {
  const { rating, lessonId } = req.body;
  if (!lessonId)
    return res.status(400).json({ message: "lessonId is required" });
  if (!rating) return res.status(400).json({ message: "rating is required" });
  try {
    const result = await DB.executeProcedure("addRating", {
      lessonId,
      rating,
    });

    if (result.rowsAffected[0] > 0) {
      res
        .status(201)
        .json({ message: "Rating added successfully", status: "success" });
    } else {
      res
        .status(400)
        .json({ message: "Rating not added successfully", status: "failed" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
};

export default addRating;
