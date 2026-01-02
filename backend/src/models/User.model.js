import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            enum: ['admin', 'staff', 'volunteer', 'donor'],
            default: 'staff'
        },
        phone: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
