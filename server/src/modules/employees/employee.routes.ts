import { Router } from "express";
import { hashPassword } from "../auth/password.js";
import { requireAuth } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/role.middleware.js";
import { UserModel } from "../users/user.model.js";

const router = Router();

router.get("/", requireAuth, requireRole(["OWNER"]), async (_req, res) => {
  const employees = await UserModel.find({ role: "EMPLOYEE" }).select(
    "_id name email isActive"
  );

  const employeesFix = employees.map((e) => {
    const employeesPojo = { ...e.toObject(), id: e._id.toString() };
    return employeesPojo;
  });

  res.json({ employees: employeesFix });
});

router.post("/", requireAuth, requireRole(["OWNER"]), async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const hashed = await hashPassword(password);

  const employee = await UserModel.create({
    name,
    email,
    passwordHash: hashed,
    role: "EMPLOYEE",
    isActive: true,
  });

  res.status(201).json({
    employee: {
      id: employee._id,
      name: employee.name,
      email: employee.email,
      role: employee.role,
    },
  });
});

export default router;
