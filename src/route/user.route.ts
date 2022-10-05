import { Router } from "express";
import * as user from "../controller/user.controller";
const router = Router();

router.get("/user/:id/nft", user.getUserNft);

export default router;