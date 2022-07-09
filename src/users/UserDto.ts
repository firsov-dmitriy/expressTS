import { V4Options } from "uuid";
import { IUser } from "../Types";

export default class UserDto {
  email: string | undefined;
  name: string | undefined;
  id: V4Options | undefined;
  constructor(model: IUser) {
    this.email = model.email;
    this.id = model.id;
    this.name = model.name;
  }
}
