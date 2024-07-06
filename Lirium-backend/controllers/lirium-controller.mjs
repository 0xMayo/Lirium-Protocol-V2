import { lirium } from "../server.mjs";
import { asyncHandler } from '../middleware/asyncHandler.mjs';

export const listLiriumBlocks = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: lirium });
  });