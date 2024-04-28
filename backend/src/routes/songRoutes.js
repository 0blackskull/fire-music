import { Router } from "express";
import SongController from "../controllers/SongController.js";

const SongRouter = new Router();

// SongRouter.route('/:id').get((req, res) => res.send('Request recieved'));

SongRouter.route('/next').get(SongController.getNextSongs);

export default SongRouter;