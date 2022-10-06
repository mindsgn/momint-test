require('dotenv').config();
import { RequestHandler} from "express";
import { ethers, providers, BigNumber, } from 'ethers'
import nft from "../schema/nft.schema";
import user from "../schema/user.schema";
import { token } from "morgan";
const contractABI = require("../../abi/contract.json");

//get ownership address
export const getOwnership: RequestHandler = async (req: any, res: any) => {
    const { nftid } = req.params;
    try {
        const query = await nft
            .findOne({_id: nftid})
            .select({contract:1, userId:1, tokenId: 1}).lean()
        const { userId, tokenId } = query;
        const { _hex } = tokenId;

        const provider = await new providers.JsonRpcProvider('https://rpc.gnosischain.com');
        const NFTContract = await new ethers.Contract("0xc946135974fa5029d32f9a9d4bd179f8a6aca94e", contractABI, provider);
        
        console.log(parseInt(_hex, 16))

        NFTContract.ownerOf(parseInt(_hex, 16))
        .then((results: any)=> {
            const data = {
                blockchainOwner: results,
                userId: userId,
            };
            return res.status(200).json({success: true, data,});
        }).catch((error: any)=>{
            return res.status(300).json({success: false});
        });

    } catch (error) {
        console.log(error)
        return res.status(303).json({success: false});
    }
};