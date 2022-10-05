import { RequestHandler, request, response } from "express";
import user from "../schema/user.schema";

export const getFollowerNft: RequestHandler = async (req: any, res: any) => {
    try {
        const query = await user.find({})
        // return response with posts, total pages, and current page
        return res.status(200).json({success: true, data: query});
    } catch (error) {
        return res.status(303).json({success: false});
    }
};
