import { Router } from "express";
import { registerStaff, verifyEmail, login } from "../controllers/auth.controller";

const router = Router();


/**
 * @swagger
 * /api/auth/register-staff:
 *   post:
 *     summary: Register a new employee
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin registered successfully
 */
router.post("/register-staff", registerStaff); 

/**
 * @swagger
 * /api/auth/verify/{token}:
 *   get:
 *     summary: Verify email address
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email verified
 */
router.get("/verify/:token", verifyEmail);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login for admin, staff, or customer
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);

export default router;

