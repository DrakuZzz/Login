import { Router } from 'express';
import { getLogin } from '../controllers/logincontroller.js';

const router = Router();
router.post('/all', getLogin);

export default router;