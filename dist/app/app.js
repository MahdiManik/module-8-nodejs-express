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
const app = (0, express_1.default)();
// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
courseRouter.get("/complete-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        massage: "course completed",
        data: course,
    });
});
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        massage: "user created",
        data: user,
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(something);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}));
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        massage: "successfully received dat",
    });
});
// Global error handler
app.use((error, req, res, next) => {
    console.log(error);
    res.status(400).json({
        success: false,
        massage: "failed to get data",
    });
});
exports.default = app;
