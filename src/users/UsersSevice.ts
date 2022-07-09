import UsersModel from "./UsersModel";
import bcrypt from "bcrypt";
import AuthService from "../auth/AuthService";
import UserDto from "./UserDto";
import { IUser } from "../Types";

class UsersSevice {
  async registration(email: string, password: string, name: string) {
    const candidate = await UsersModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with this email ${email} address already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user: IUser = await UsersModel.create({
      email,
      name,
      password: hashPassword,
    });
    const userDto = new UserDto(user);
    const tokens = AuthService.generateToken({
      ...userDto,
    });
    if (tokens) await AuthService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UsersSevice();
