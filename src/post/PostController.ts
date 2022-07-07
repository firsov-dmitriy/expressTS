import PostModel from "./PostModel";
import { Request, Response } from "express";

class PostController {
  async create(req: Request, res: Response) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await PostModel.create({ author, title, content, picture });
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await PostModel.find();
      return res.json(posts);
    } catch (error) {
      console.log(error);
    }
  }
  async getOnePosts(req: Request, res: Response) {
    const { id } = req.params;
    const post = await PostModel.findById(id);
    return res.json(post);
  }
}

export default new PostController();
