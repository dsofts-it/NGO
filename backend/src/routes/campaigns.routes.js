import express from 'express';
import auth from '../middleware/auth.middleware.js';
import { createCrudController } from '../controllers/crud.controller.js';
import Campaign from '../models/Campaign.model.js';

const router = express.Router();
const controller = createCrudController(Campaign);

router.use(auth);
router.get('/', controller.list);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
