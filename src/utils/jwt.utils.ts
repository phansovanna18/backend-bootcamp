import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

// signJwt with private key
export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
  });
}

// verifyJwt with public key
export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);
    return {
      valid: true,
      expired: false,
      decoded ,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
