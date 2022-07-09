import { JwtPayload, sign } from "jsonwebtoken";
import * as uuid from "uuid";
import AuthModel from "./AuthModel";

class AuthService {
  generateToken(payload: JwtPayload) {
    // const accessToken = sign(payload, process.env.JWT_ACCESS_SECRET, {
    //   expiresIn: "30m",
    // });
    if (
      typeof process.env.JWT_REFRESH_SECRET === "string" &&
      typeof process.env.JWT_ACCESS_SECRET === "string"
    ) {
      const accessToken = sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "30m",
      });
      const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "30d",
      });
      return {
        accessToken,
        refreshToken,
      };
    }
    // const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET, {
    //   expiresIn: "30d",
    // });
  }

  async saveToken(userId: uuid.V4Options | undefined, refreshToken: string) {
    const tokenData = await AuthModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await AuthModel.create({ user: userId, refreshToken });
    return token;
  }
}

export default new AuthService();
