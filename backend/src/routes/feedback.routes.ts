import { Router } from "express";
import addFeedback from "../controllers.feedback/addFeedback";
import fetchFeedback from "../controllers.feedback/fetchFeedback";
import getFeedback from "../controllers.feedback/getFeedback";
import deleteFeedback from "../controllers.feedback/deleteFeedback";
import serviceFeedback from "../controllers.feedback/serviceFeedback";
import updateFeedback from "../controllers.feedback/updateFeedback";

const feedbackRouter = Router();

feedbackRouter.post("/add", addFeedback);
feedbackRouter.get("/fetch", fetchFeedback);
feedbackRouter.put("/update", updateFeedback);
feedbackRouter.get("/get/:id", getFeedback);
feedbackRouter.delete("/delete", deleteFeedback);
feedbackRouter.put("/service", serviceFeedback);

export default feedbackRouter;
