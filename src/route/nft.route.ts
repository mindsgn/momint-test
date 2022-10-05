import { Router } from "express";
import * as user from "../controller/nft.controller";
const router = Router();

router.get("/nft", user.getFollowerNft);

export default router;