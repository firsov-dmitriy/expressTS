import { V4Options } from "uuid";
export interface IUser {
  email?: string | undefined;
  name?: string | undefined;
  password?: string | undefined;
  id?: V4Options | undefined;
}
export interface IPost {
  author: string;
  title: string;
  contetn: string;
  picture: string;
}
