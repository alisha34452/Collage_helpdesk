import { Router } from "express";
import { TrackUser } from "../controllers/track.js";

const router = Router();

router.route("/").get(
 TrackUser
);

export default router;
