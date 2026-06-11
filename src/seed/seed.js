const mongoose =
require("mongoose");

const Deal =
require("../src/models/Deal");

mongoose.connect(
"mongodb://127.0.0.1:27017/dealPlatform"
);

for(let i=1;i<=20;i++)
{
await Deal.create({
companyName:`Company ${i}`,
industry:"IT",
expectedROI:20,
riskLevel:"Low",
targetAmount:100000,
closingDate:new Date()
});
}