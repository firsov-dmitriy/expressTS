import Router from "express";
import PostController from "./PostController";

const PostRouter = Router();

PostRouter.post("/posts", PostController.create);
PostRouter.get("/posts", PostController.getAllPosts);
PostRouter.get("/posts/:id", PostController.getOnePosts);
PostRouter.put("/posts/:id", PostController.updatePost);
PostRouter.delete("/posts/:id", PostController.deletePost);

export default PostRouter;
