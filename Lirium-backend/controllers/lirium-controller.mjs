import { asyncHandler } from '../middleware/asyncHandler.mjs';
import Block from '../models/BlockSchema.mjs';

export const listLiriumBlocks = asyncHandler(async (req, res, next) => {
    const blocks = await Block.find().sort({ blockIndex: 1 });
    res.status(200).json({ success: true, data: blocks });
  });