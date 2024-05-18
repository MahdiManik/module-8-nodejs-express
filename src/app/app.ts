import { error } from "console";
import express, { NextFunction, Request, Response } from "express";
const app = express();

// Router

const userRouter = express.Router();
const courseRouter = express.Router();

// parser
app.use(express.json());
app.use(express.text());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

courseRouter.get("/complete-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    massage: "course completed",
    data: course,
  });
});

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    massage: "user created",
    data: user,
  });
});

// middleware

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(something);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    massage: "successfully received dat",
  });
});

// Global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.status(400).json({
    success: false,
    massage: "failed to get data",
  });
});

export default app;
