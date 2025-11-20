import { Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import User from "../models/User.model";
import { sendEmail } from "../utils/sendEmail";
import { generateJwt } from "../utils/generateToken";

/**
 * Register (used for admin or staff)
 * body: { name?, email, password, role }  // role must be 'admin' or 'staff'
 */
export const registerStaff = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    // Accept only admin or staff for these endpoints


    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationExpires = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24h

    const user = await User.create({
      name, email, password: hashed, role: 'staff', verificationToken, verificationExpires
    });

    // send verification email (link to frontend that hits backend verify route)
    const verifyLink = `${process.env.CLIENT_URL}/api/auth/verify-email/${verificationToken}`;
    const html = `<p>Hello ${name || email},</p>
      <p>Click to verify your email: <a href="${verifyLink}">${verifyLink}</a></p>
      <p>This link expires in 24 hours.</p>`;

    await sendEmail(email, "Verify your email - Sankalp", html);

    return res.status(201).json({ message: "Registered. Check email for verification link." });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

/**
 * Verify email
 * GET /api/auth/verify/:token
 */
export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ verificationToken: token, verificationExpires: { $gt: new Date() } });
    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationExpires = undefined;
    await user.save();

    // Option: redirect to frontend success page
    return res.json({ message: "Email verified successfully" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * Login (allowed only if verified)
 * POST /api/auth/login
 * body: { email, password }
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email & password required" });

    const user = await User.findOne({ email });
    console.log('user', user, email);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.isVerified) return res.status(401).json({ message: "Please verify your email first." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateJwt({ id: user._id, role: user.role });
    return res.json({ message: "Login successful", token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
