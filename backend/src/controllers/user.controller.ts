import { Request, Response } from "express";
import User from "../models/User.model";

export const updateProfile = async (req: Request & { user?: any }, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const allowed = ["name","idCard","permanentAddress","temporaryAddress"];
    const updates: any = {};
    for (const k of allowed) if (k in req.body) updates[k] = (req.body as any)[k];

    const user = await User.findByIdAndUpdate(userId, updates, { new: true }).select("-password -verificationToken -verificationExpires");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ message: "Profile updated", user });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
