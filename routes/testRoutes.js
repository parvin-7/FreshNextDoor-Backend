// routes/testRoutes.js
import express from 'express';
import { addTestData, getTestData } from '../controllers/testController.js';

const router = express.Router();

router.get('/test', getTestData);
router.post('/test', addTestData);

export default router;
