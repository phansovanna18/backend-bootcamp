"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const privateKey = config_1.default.get("privateKey");
const publicKey = config_1.default.get("publicKey");
// signJwt with private key
function signJwt(object, options) {
    return jsonwebtoken_1.default.sign(object, privateKey, Object.assign({}, (options && options)));
}
exports.signJwt = signJwt;
// verifyJwt with public key
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, privateKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    }
    catch (e) {
        return {
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null,
        };
    }
}
exports.verifyJwt = verifyJwt;
