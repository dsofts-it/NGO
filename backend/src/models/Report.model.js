import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        periodStart: {
            type: Date
        },
        periodEnd: {
            type: Date
        },
        summary: {
            type: String,
            default: ''
        },
        metrics: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
        published: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;
