import type { Request, Response } from 'express';
import { UserModel } from '../users/user.model.js';
import { hashPassword, comparePassword } from './password.js';
import { signToken } from './jwt.js';

export const registerOwner = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const exists = await UserModel.findOne({ email });
  if (exists) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  const user = await UserModel.create({
    role: 'OWNER',
    name,
    email,
    passwordHash: await hashPassword(password),
  });

  return res.status(201).json({ id: user._id });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const valid = await comparePassword(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = signToken({
    userId: user._id.toString(),
    role: user.role,
  });

  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: false, // true in prod
    sameSite: 'lax',
  });

  res.json({
    id: user._id,
    role: user.role,
    name: user.name,
  });
};
