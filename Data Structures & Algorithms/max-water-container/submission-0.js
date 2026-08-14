class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let res = 0;

        while(left < right){
            let min = Math.min(heights[left],heights[right])
            let currArea = min * (right - left);
            res = Math.max(res, currArea);
            
            if(min === heights[right]){
                right--;
            }else{
                left++;
            }
        }

        return res;
    }
}
