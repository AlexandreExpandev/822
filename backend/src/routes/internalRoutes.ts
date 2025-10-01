import { Router } from 'express';
import * as languageController from '../api/internal/language/controller';
import * as codeController from '../api/internal/code/controller';

const router = Router();

// Internal routes for language and code management
router.get('/language', languageController.listHandler);
router.post('/language', languageController.createHandler);
router.get('/language/:id', languageController.getHandler);
router.put('/language/:id', languageController.updateHandler);
router.delete('/language/:id', languageController.deleteHandler);

router.get('/code/:language', codeController.getHandler);
router.post('/code', codeController.createHandler);
router.put('/code/:id', codeController.updateHandler);
router.delete('/code/:id', codeController.deleteHandler);

export default router;
