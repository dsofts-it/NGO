import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
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
        skills: [
            {
                type: String,
                trim: true
            }
        ],
        availability: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            enum: ['applied', 'active', 'inactive'],
            default: 'active'
        },
        assignedProjects: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Project'
            }
        ],
        joinedAt: {
            type: Date,
            default: Date.now
        },
        notes: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
