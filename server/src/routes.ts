import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import employeeRoutes from './modules/employees/employee.routes.js';


const router = Router();

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);

export default router;
