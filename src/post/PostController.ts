import PostModel from "./PostModel";
import { Request, Response } from "express";
import { IPost } from "../Types";

class PostController {
  async create(req: Request, res: Response) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await PostModel.create({ author, title, content, picture });
      return res.json(post);
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
    if (id) {
      const post = await PostModel.findById(id);
      return res.json(post);
    }
    return res.send("You didn't enter an id.");
  }
  async updatePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const { author, title, content, picture } = req.body;
        const post = await PostModel.findByIdAndUpdate(
          id,
          {
            author,
            title,
            content,
            picture,
          },
          { new: true }
        );
        return res.json(post);
      } else {
        return res.send("You didn't enter an id.");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const post = await PostModel.findByIdAndDelete(id);
        return res.send(`Post id:${id} has been deleted`);
      } else {
        return res.send("You didn't enter an id.");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
