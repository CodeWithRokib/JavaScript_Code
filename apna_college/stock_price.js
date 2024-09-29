function maxProfit(prices) {

    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        let potentialProfit = prices[i] - minPrice;
        
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
    }
    
    return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));  // Output: 5 (Buy at 1, sell at 6)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));  // Output: 0 (No profit possible)
