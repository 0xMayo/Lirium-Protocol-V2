import express from 'express';
import { listLiriumBlocks } from '../controllers/Lirium-controller.mjs';

const router = express.Router();

router.get('/', listLiriumBlocks);

export default router;
