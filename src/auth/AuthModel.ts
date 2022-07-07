import mongoose from "mongoose";

const AuthModel = new mongoose.Schema({
  email: { type: String, requred: true },
  password: { type: String, requred: true },
});

export default mongoose.model("Auth", AuthModel);
