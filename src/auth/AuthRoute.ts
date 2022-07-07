import Router from "express";
import authController from "./authController";

const AuthRouter = Router();

AuthRouter.get("/sign", authController.sign);

export default AuthRouter;
