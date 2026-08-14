class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let min = Infinity;

        for(let i = 0; i < prices.length; i++){
            min = Math.min(min, prices[i]);
            profit = Math.max(profit, prices[i] - min);
        }
        
        return profit;
    }
}
