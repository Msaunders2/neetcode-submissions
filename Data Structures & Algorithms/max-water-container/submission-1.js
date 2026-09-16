class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let left = 0;
        let right = heights.length-1;

        while(left < right){
            let currArea = (Math.min(heights[left], heights[right])) * (right - left);
            maxArea = Math.max(maxArea, currArea);

            if(heights[left] > heights[right]){
                right--;
            }else if(heights[left] === heights[right]){
                right--;
                left++;
            }else{
                left++
            }
        }

        return maxArea;
    }
}
