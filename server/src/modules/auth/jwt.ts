import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export interface JwtPayload {
  userId: string;
  role: string;
}

export const signToken = (payload: JwtPayload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });

export const verifyToken = (token: string) =>
  jwt.verify(token, JWT_SECRET) as JwtPayload;
