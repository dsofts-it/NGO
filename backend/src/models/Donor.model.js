import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true
        },
        phone: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            enum: ['individual', 'corporate', 'anonymous'],
            default: 'individual'
        },
        notes: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

const Donor = mongoose.model("Donor", donorSchema);
export default Donor;
