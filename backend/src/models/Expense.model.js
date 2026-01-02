import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: String,
            default: ''
        },
        date: {
            type: Date,
            default: Date.now
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
        paidTo: {
            type: String,
            default: ''
        },
        paymentMethod: {
            type: String,
            enum: ['cash', 'card', 'bank', 'mobile', 'other'],
            default: 'bank'
        },
        notes: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
