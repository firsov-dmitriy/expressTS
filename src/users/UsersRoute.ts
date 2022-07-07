import Router from "express";
import UsersController from "./UsersController";

const UsersRouter = Router();

UsersRouter.post("/users", UsersController.createUser);
UsersRouter.get("/users", UsersController.getAllUsers);
UsersRouter.get("/users/:id", UsersController.getOneUser);
UsersRouter.put("/users/:id", UsersController.updateUser);
UsersRouter.delete("/users/:id", UsersController.deleteUser);

export default UsersRouter;
