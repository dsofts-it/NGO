import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
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
        goalAmount: {
            type: Number,
            default: 0
        },
        raisedAmount: {
            type: Number,
            default: 0
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
        tags: [
            {
                type: String,
                trim: true
            }
        ],
        coverImage: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

const Campaign = mongoose.model("Campaign", campaignSchema);
export default Campaign;
