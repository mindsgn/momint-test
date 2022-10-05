import { Router } from "express";
import * as user from "../controller/user.controller";
const router = Router();

router.get("/user/:id/nft", user.getUserNft);
router.get("/user/:id/feed", user.getFollowersNft);

export default router;