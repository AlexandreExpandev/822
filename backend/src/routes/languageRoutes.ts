import { Router } from 'express';
import * as languageController from '../api/internal/language/controller';

const router = Router();

// Language routes
router.get('/', languageController.listHandler);
router.get('/:id', languageController.getHandler);

export default router;
