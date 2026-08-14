class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;

        for(let i = 0; i < heights.length; i++){
            let min = heights[i];
            for(let j = i; j < heights.length; j++){
                if(heights[j] < min){
                    min = heights[j];
                }
                
                let currMax = min * (j - i + 1);
                max = Math.max(max, currMax);
            }
        }

        return max;
    }
}
