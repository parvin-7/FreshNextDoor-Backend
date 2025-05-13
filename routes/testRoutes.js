// server/routes/testRoutes.js
import express from 'express';
const { addTestData, getTestData } = require('../controllers/testController');


const router = express.Router();

router.post('/add', addTestData);
router.get('/all', getTestData);

export default router;
