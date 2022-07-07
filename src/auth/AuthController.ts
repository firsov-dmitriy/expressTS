import { Request, Response } from "express";
import { expressjwt as jwt, Request as JWTRequest } from "express-jwt";
class AuthController {
  async sign(req: JWTRequest, res: Response) {
    jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] });
    if (!req.auth?.admin) return res.sendStatus(401);
    res.sendStatus(200);
  }
}

export default new AuthController();
