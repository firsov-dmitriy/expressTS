import Router from "express";
import UsersController from "./UsersController";

const UsersRouter = Router();

UsersRouter.post("/registration", UsersController.registration);
UsersRouter.post("/login", UsersController.login);
UsersRouter.post("/logout", UsersController.logout);
UsersRouter.get("/users", UsersController.getAllUsers);
UsersRouter.get("/users", UsersController.refresh);
UsersRouter.get("/users/:id", UsersController.getOneUser);
UsersRouter.put("/users/:id", UsersController.updateUser);
UsersRouter.delete("/users/:id", UsersController.deleteUser);

export default UsersRouter;
