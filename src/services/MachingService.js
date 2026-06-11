const calculateScore =
(pref, deal)=>{

let score = 0;

if(pref.riskAppetite === deal.riskLevel)
score += 30;

if(
pref.preferredIndustries.includes(
deal.industry
)
)
score += 25;

if(
pref.maxBudget >= deal.minInvestment
)
score += 20;
4
score += Math.min(
deal.expectedROI/100*15,
15
);

score += Math.min(
deal.currentRaisedAmount/
deal.targetAmount*10,
10
);

return score;
};

module.exports =
calculateScore;