import { Router } from 'express';
import { getInsercion } from '../controllers/insercioncontroller.js';

const router = Router();
router.post('/insercion', getInsercion);

export default router;