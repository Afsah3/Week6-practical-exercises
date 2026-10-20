function applyDiscount(prices, rule) {
    const discounted = [];

    for (const price of prices) {
        discounted.push(rule(price));
    }

    return discounted;
}

const prices = [15000, 30000, 50000];
const tenPercentOff = applyDiscount(prices, function(price) {
    return price * 0.9;
});

const fiveThousandOff = applyDiscount(prices, function(price) {
    if (price > 50000) {
        return price - 5000;
    }
    return price;
});

console.log(tenPercentOff);
console.log(fiveThousandOff);