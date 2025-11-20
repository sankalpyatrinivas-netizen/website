import mongoose, { Document, Schema } from "mongoose";

export type RoleType = "admin" | "staff" | "guest";

export interface IAddress {
  houseNo?: string;
  street?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export interface IIdCard {
  type?: "Aadhaar" | "PAN" | "Passport" | "VoterID" | "DrivingLicense";
  number?: string;
}

export interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
  role: RoleType;
  isVerified: boolean;
  verificationToken?: string;
  verificationExpires?: Date;
  idCard?: IIdCard;
  permanentAddress?: IAddress;
  temporaryAddress?: IAddress;
  createdAt: Date;
  updatedAt: Date;
}

const addressSchema = new Schema<IAddress>({
  houseNo: String,
  street: String,
  city: String,
  state: String,
  pincode: String,
});

const idCardSchema = new Schema<IIdCard>({
  type: { type: String, enum: ["Aadhaar","PAN","Passport","VoterID","DrivingLicense"] },
  number: String,
});

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin","staff","guest"], default: "guest" },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  verificationExpires: Date,
  idCard: idCardSchema,
  permanentAddress: addressSchema,
  temporaryAddress: addressSchema,
}, { timestamps: true });

export default mongoose.model<IUser>("User", UserSchema);
