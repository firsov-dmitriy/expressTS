import { Request, Response } from "express";
import { IUser } from "../Types";
import UserModel from "./UsersModel";
import UsersSevice from "./UsersSevice";

class UsersController {
  async registration(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;
      const userData = await UsersSevice.registration(email, password, name);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }
  async login(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body;
      const user = await UserModel.create({ email, name, password });
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async logout(req: Request, res: Response) {
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
      const users: IUser[] = await UserModel.find();
      return res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async refresh(req: Request, res: Response) {
    try {
      const users: IUser[] = await UserModel.find();
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
        const user = await UserModel.findByIdAndUpdate(
          id,
          {
            name,
            email,
            password,
          },
          { new: true }
        );
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
