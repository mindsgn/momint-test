import { RequestHandler, request, response } from "express";
import user from "../schema/user.schema";
import nft from "../schema/nft.schema";

export const getUserNft: RequestHandler = async (req: any, res: any) => {
    const { id, page = 2, limit = 1 } = req.params;
    try {
        const query = await nft.find({userId: id})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
        return res.status(200).json({success: true, data: query});
    } catch (error) {
        return res.status(303).json({success: false});
    }
};
