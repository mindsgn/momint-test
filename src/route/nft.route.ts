import { Router } from "express";
import * as nft from "../controller/nft.controller";
const router = Router();

router.get("/nft/:nftid/owner", nft.getNft);

export default router;