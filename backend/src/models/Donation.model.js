import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
    {
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Donor'
        },
        campaign: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campaign'
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        currency: {
            type: String,
            default: 'USD'
        },
        method: {
            type: String,
            enum: ['cash', 'card', 'bank', 'mobile', 'online', 'cheque'],
            default: 'online'
        },
        status: {
            type: String,
            enum: ['pending', 'paid', 'failed', 'refunded'],
            default: 'paid'
        },
        donatedAt: {
            type: Date,
            default: Date.now
        },
        note: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
