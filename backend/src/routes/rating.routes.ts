import { Router } from "express";
import addRating from "../controllers.rating/addRating";
import getAvgRating from "../controllers.rating/avgRating";
import fetchRatings from "../controllers.rating/fetchRatings";
import getRatings from "../controllers.rating/getRatings";
const ratingRouter = Router();

ratingRouter.post("/add", addRating);
ratingRouter.get("/avg/:id", getAvgRating);
ratingRouter.get("/ratings", fetchRatings);
ratingRouter.get("/ratings/:id", getRatings);

export default ratingRouter;
