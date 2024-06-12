import { lirium } from "../server.mjs";

export const listLiriumBlocks = (req, res, next) => {
    res.status(200).json({ success: true, data: lirium.chain });
}