import { Router } from 'express';
import languageRoutes from './languageRoutes';
import codeRoutes from './codeRoutes';

const router = Router();

// Mount route groups
router.use('/languages', languageRoutes);
router.use('/code', codeRoutes);

export default router;
