import { Router } from 'express';
import { getCliente } from '../controllers/clientecontroller.js';

const router = Router();

router.get('', getCliente);
// router.get('/clinica/:id', getClinicas);

export default router;

// router.get('/clinica', (req, res) => {
//     res.send('clinica');
// });