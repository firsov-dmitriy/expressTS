import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
  author: { type: String, requred: true },
  title: { type: String, requred: true },
  content: { type: String, requred: true },
  picture: { type: String },
});

export default mongoose.model("Post", PostModel);
