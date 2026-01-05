import type { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../modules/auth/jwt.js';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
