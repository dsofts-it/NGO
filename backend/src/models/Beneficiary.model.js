import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            min: 0
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other', 'unknown'],
            default: 'unknown'
        },
        location: {
            type: String,
            default: ''
        },
        needs: [
            {
                type: String,
                trim: true
            }
        ],
        status: {
            type: String,
            enum: ['active', 'inactive', 'completed'],
            default: 'active'
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    },
    { timestamps: true }
);

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);
export default Beneficiary;
