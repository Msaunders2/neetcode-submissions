class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0;
        let sellDay = 1;
        let maxProfit = 0;

        let minVal = Infinity;

        while(buyDay < sellDay && sellDay < prices.length){
            if(prices[buyDay] <= minVal && prices[buyDay] < prices[sellDay]){
                minVal = prices[buyDay];
                maxProfit = Math.max(prices[sellDay] - prices[buyDay], maxProfit);
                sellDay++;
            }else{
                buyDay = sellDay;
                sellDay++;
            }
        }

        return maxProfit;
    }
}
