import { RequestHandler, request, response } from "express";
import mongoose from "mongoose";
import user from "../schema/user.schema";
import nft from "../schema/nft.schema";
const ObjectId = mongoose.Types.ObjectId;

export const getUserNft: RequestHandler = async (req: any, res: any) => {
    const { id, page = 1, limit = 3 } = req.params;
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

export const getFollowersNft: RequestHandler = async (req: any, res: any) => {
    const { id, page = 1, limit = 100 } = req.params;
    try {
        const query = await user.aggregate([
            {
                $match: { _id: new ObjectId(id) },
            },
            {   $project : {
                    following: 1, 
                }
            },
            { 
                $unwind : "$following",
            },
            {   $lookup: {
                    from: "nft",
                    localField: "_id",
                    foreignField: "userId",
                    as: "nft",
                    
                }
            },
            
            {
                $facet : {
                    data: [ { $skip: page }, { $limit: limit } ] // add projection here wish you re-shape the docs
                } 
            }
        ]);
        return res.status(200).json({success: true, data: query});
    } catch (error) {
        return res.status(303).json({success: false});
    }
};
