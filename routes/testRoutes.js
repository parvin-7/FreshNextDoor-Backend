// server/routes/testRoutes.js
import express from 'express';
import { addTestData, getTestData } from '../controllers/testController.js';

const router = express.Router();

router.post('/add', addTestData);
router.get('/all', getTestData);

export default router;
