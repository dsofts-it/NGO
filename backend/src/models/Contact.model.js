import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
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
        subject: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['new', 'in_progress', 'resolved'],
            default: 'new'
        }
    },
    { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
