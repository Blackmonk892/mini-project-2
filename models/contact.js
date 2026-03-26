import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name connot exceed 100 characters"],
    },
    email: {
      typr: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    subject: {
      type: String,
      required: [true, "Subject connot exceed 200 characters"],
      trim: true,
      maxlength: [1000, "Messages can't exceed 1000 characters"],
    },

    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestapms: true },
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
