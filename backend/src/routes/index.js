import SongRouter from "./songRoutes.js";

import { Router } from "express";

const MainRouter = new Router();

MainRouter.use('/song', SongRouter);

export default MainRouter;