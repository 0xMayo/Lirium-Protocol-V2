import express from 'express';
import { listLiriumBlocks } from '../controllers/Lirium-controller.mjs';
import { protect } from '../middleware/authorization.mjs';

const router = express.Router();

router.get('/', protect, listLiriumBlocks);

export default router;
