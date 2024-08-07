import { lirium, pubnubServer } from "../server.mjs"

export const mineBlock = (req, res, next) => {

    try {
        const data = req.body

        if (!data) {
            const err = new Error('Data is missing')
            err.statusCode = 400;
            throw err
        }
        const block = lirium.addBlock({ data: data })

        pubnubServer.broadcast()

        res.status(201).json({
            success: true,
            data: block
        })
    } catch (error) {
        next(error)
    }

}

// import { lirium, pubnubServer } from "../server.mjs";
// import { asyncHandler } from '../middleware/asyncHandler.mjs';
// import Block from '../models/BlockSchema.mjs';

// export const mineBlock = asyncHandler(async (req, res, next) => {
//   const data = req.body;

//   if (!data) {
//     const err = new Error('Data is missing');
//     err.statusCode = 400;
//     throw err;
//   }

//   const block = lirium.addBlock({ data: data });
//   const blockToSave = new Block(block);
//   await blockToSave.save();

//   pubnubServer.broadcast();

//   res.status(201).json({
//     success: true,
//     data: block
//   });
// });
