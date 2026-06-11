const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({

    investorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    riskAppetite: String,

    preferredIndustries: [String],

    minBudget: Number,

    maxBudget: Number

});

module.exports =
mongoose.model(
"InvestorPreference",
preferenceSchema
);