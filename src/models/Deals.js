const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    companyName: String,
    industry: String,
    investmentRequired: Number,
    expectedROI: Number,
    riskLevel: String,
    description: String,
    minInvestment: Number,
    maxInvestment: Number,
    targetAmount: Number,
    currentRaisedAmount: {
        type: Number,
        default: 0
    },
    closingDate: Date,
    tags: [String],
    status: {
        type: String,
        default: "Open"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Deal", dealSchema);