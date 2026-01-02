import express from 'express';
import auth from '../middleware/auth.middleware.js';
import { createCrudController } from '../controllers/crud.controller.js';
import Contact from '../models/Contact.model.js';

const router = express.Router();
const controller = createCrudController(Contact);

router.post('/', controller.create);
router.use(auth);
router.get('/', controller.list);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
