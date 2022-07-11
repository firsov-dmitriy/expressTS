import mongoose from "mongoose";

const UsersModel = new mongoose.Schema({
  email: { type: String, requred: true },
  name: { type: String, requred: true },
  password: { type: String, requred: true },
});

export default mongoose.model("User", UsersModel);
