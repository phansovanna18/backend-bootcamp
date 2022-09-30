"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const deserializeUser_1 = __importDefault(require("./middleware/deserializeUser"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = config_1.default.get("port");
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(deserializeUser_1.default);
app.post("/api/data", (req, res) => {
});
app.get("/", (req, res) => {
    return res.send("Hello world...");
});
app.listen(process.env.PORT || port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connect_1.default)();
    logger_1.default.info(`App running at http://localhost:${port}`);
    (0, routes_1.default)(app);
}));
