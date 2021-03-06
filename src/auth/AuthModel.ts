import mongoose from "mongoose";

const AuthModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId },
  id: { type: mongoose.Schema.Types.ObjectId },
  refreshToken: { type: String, require: true },
});

export default mongoose.model("Auth", AuthModel);
