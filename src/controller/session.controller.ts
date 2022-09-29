import { Request, Response } from "express";
import config from "config";
import { validatePassword } from "../service/user.service";
import {
  createSession,
  findSessions,
  updateSession
} from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";

export async function createSessionHandler(req: Request, res: Response) {
  
  // validate the user password
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  
  // create a session
  const session = await createSession(user._id, req.get("user-agent") || "");
  
  // create an acess token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") }
  );

  // create a refres token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTtl") }
  );

  res.send({ accessToken, refreshToken });
}

export async function getSessionsHandler(req: Request, res: Response) {
  // how do we know what the user id is? So idealy we need to create a deserializeUser middleware and we thinks all routes
  const userId = res.locals.user._id;
  const sessions = await findSessions({ user: userId, valid: true });
  return res.send(sessions);
}

  export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await updateSession({_id: sessionId }, { valid: req.body.valid });
  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
