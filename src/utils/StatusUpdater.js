const updateStatus = (deal) => {

    if (
        new Date() > deal.closingDate ||
        deal.currentRaisedAmount >= deal.targetAmount
    ) {
        return "Closed";
    }

    if (deal.currentRaisedAmount > 0) {
        return "Partially Filled";
    }

    return "Open";
};

module.exports = updateStatus;