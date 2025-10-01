import { Router } from 'express';
import * as languageController from '../api/external/public/language/controller';
import * as codeController from '../api/external/public/code/controller';

const router = Router();

// Public routes for language selection
router.get('/public/languages', languageController.listHandler);

// Public routes for code generation
router.get('/public/code/:language', codeController.getHandler);
router.get('/public/code/:language/download', codeController.downloadHandler);

export default router;
