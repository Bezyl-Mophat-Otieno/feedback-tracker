import addUser from "../controllers.users/addUser";
import deactivateUser from "../controllers.users/deactivateUser";
import activateUser from "../controllers.users/activateUser";
import updateUser from "../controllers.users/updateUser";
import fetchUsers from "../controllers.users/fetchUsers";
import getUser from "../controllers.users/getUser";
import getLoggedUser from "../controllers.users/getLoggedUser";
import resetPassword from "../controllers.users/resetPassword";
import loginUser from "../controllers.users/loginUser";

import { Router } from "express";
const userRouter = Router();
userRouter.post("/add", addUser);
userRouter.put("/deactivate/:id", deactivateUser);
userRouter.put("/activate/:id", activateUser);
userRouter.put("/update/:id", updateUser);
userRouter.get("/get/:id", getUser);
userRouter.get("/fetch", fetchUsers);
userRouter.get("/getLoggedUser", getLoggedUser);
userRouter.post("/resetPassword", resetPassword);
userRouter.post("/login", loginUser);

export default userRouter;
