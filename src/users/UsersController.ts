import { Request, Response } from "express";
import { Users } from "../Types";
import UserModel from "./UsersModel";

class UsersController {
  async createUser(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body;
      const user = await UserModel.create({ email, name, password });
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      const users: Users[] = await UserModel.find();
      return res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOneUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const user = await UserModel.findById(id);
        return res.json(user);
      } else {
        return res.send("You didn't enter an id.");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const { email, name, password } = req.body;
        const user = await UserModel.findByIdAndUpdate(id, {
          name,
          email,
          password,
        });
        return res.json(user);
      } else {
        return res.send("You didn't enter an id.");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const user = await UserModel.findByIdAndDelete(id);
        return res.send(`User id:${id} has been deleted`);
      } else {
        return res.send("You didn't enter an id.");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UsersController();
