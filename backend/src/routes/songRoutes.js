import { Router } from "express";
import SongController from "../controllers/SongController.js";

const SongRouter = new Router();

// SongRouter.route('/:id').get((req, res) => res.send('Request recieved'));

SongRouter.route('/next').get(SongController.getNextSongs);

SongRouter.route('/trend').get(SongController.getTrendingSong);

SongRouter.route('/:id').get(SongController.getSongFile);

export default SongRouter;