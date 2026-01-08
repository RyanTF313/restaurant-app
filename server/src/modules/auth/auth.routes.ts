import { Router } from 'express';
import { login, registerOwner } from './auth.controller.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { UserModel } from '../users/user.model.js';

const router = Router();

router.post('/register-owner', registerOwner);
router.post('/login', login);

router.get('/me', requireAuth, async (req, res) => {
  const user = await UserModel.findOne({ id: req.user.id });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const { email, name, _id, role } = user.toObject();

  const userWithoutPW = {
    email: email,
    name: name,
    id: _id,
    role: role,
    ...req.user,
  };
 
  res.json({
    user: userWithoutPW,
  });
});

export default router;
