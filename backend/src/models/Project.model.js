import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            default: ''
        },
        location: {
            type: String,
            default: ''
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        status: {
            type: String,
            enum: ['planned', 'active', 'paused', 'completed'],
            default: 'planned'
        },
        budget: {
            type: Number,
            default: 0
        },
        beneficiariesCount: {
            type: Number,
            default: 0
        },
        tags: [
            {
                type: String,
                trim: true
            }
        ],
        campaign: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campaign'
        }
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
