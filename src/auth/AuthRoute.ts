import Router from "express";
import AuthController from "./AuthController";

const AuthRouter = Router();

AuthRouter.delete("/delete");

export default AuthRouter;
