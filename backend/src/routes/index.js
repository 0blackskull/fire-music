import ArtistController from "../controllers/ArtistController.js";
import SongRouter from "./songRoutes.js";

import { Router } from "express";

const MainRouter = new Router();

MainRouter.use('/song', SongRouter);

MainRouter.get('/artist', ArtistController.getAllArtists);

export default MainRouter;