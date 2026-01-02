import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
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
        date: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            default: ''
        },
        capacity: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum: ['planned', 'active', 'completed', 'cancelled'],
            default: 'planned'
        },
        campaign: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campaign'
        },
        volunteers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Volunteer'
            }
        ],
        attendeesCount: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
