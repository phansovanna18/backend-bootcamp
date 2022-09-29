import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  const refreshToken = get(req, "headers.x-refresh");
  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);
  console.log(decoded)
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }
  if (expired) {
  }
  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }
    const result = verifyJwt(newAccessToken as string);
    res.locals.user = result.decoded;
    return next();
  }
  return next();
};

export default deserializeUser;

// we use get from lodash bz we want to access the propertis that we don't know it exist or not.
