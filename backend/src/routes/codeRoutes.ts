import { Router } from 'express';
import * as codeController from '../api/internal/code/controller';
import { validationMiddleware } from '../middleware/validationMiddleware';

const router = Router();

// Code generation routes
router.post('/generate', validationMiddleware, codeController.generateHandler);
router.get('/download/:languageId', codeController.downloadHandler);

export default router;
