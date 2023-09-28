import DB from "../database/dbHelpers/db";
import { Request, Response } from "express";

const fetchCurrentLesson = async (req: Request, res: Response) => {
  try {
    const result = await DB.executeProcedure("currentLesson");
    if (result.recordset.length > 0) {
      res.status(200).json({
        message: "Current Lesson",
        data: result.recordset[0],
        status: "success",
      });
    } else {
      res.status(400).json({
        message: "No Current Lesson",
        data: [],
        status: "failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: [],
      status: "failed",
    });
  }
};

export default fetchCurrentLesson;
