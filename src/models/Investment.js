const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({

    investorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    dealId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Deal"
    },

    amount:Number

},
{
    timestamps:true
});

module.exports =
mongoose.model(
"Investment",
investmentSchema
);