import { Router } from 'express';
import { login, registerOwner } from './auth.controller.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';

const router = Router();

router.post('/register-owner', registerOwner);
router.post('/login', login);

router.get('/me', requireAuth, (req, res) => {
  res.json({
    user: req.user,
  });
});

export default router;
