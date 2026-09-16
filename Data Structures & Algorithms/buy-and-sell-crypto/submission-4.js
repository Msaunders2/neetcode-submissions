class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let maxProf = 0;
        let sell = 1;

        while(sell < prices.length){
            let curProf = prices[sell] - prices[buy];
            maxProf = Math.max(maxProf, curProf);

            if (prices[sell] < prices[buy]) {
                buy = sell;
            }

            sell++;

        }

        return maxProf;

    }
}
