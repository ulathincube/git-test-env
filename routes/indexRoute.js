import { Router } from 'express';
import { getAllProducts } from '../controllers/indexController';

const router = Router();

router.get('/', getAllProducts);

export default router;
