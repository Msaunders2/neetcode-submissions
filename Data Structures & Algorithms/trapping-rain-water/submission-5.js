class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let trappedWater = 0;
        let left = 0;
        let right = height.length - 1;
        
        let leftMax = height[0]
        let rightMax = height[height.length-1];

        while(left < right){
            if(leftMax <= rightMax){
                if(leftMax > height[left]){
                    let currWater = leftMax - height[left];
                    trappedWater += currWater;
                }
                leftMax = Math.max(leftMax, height[left]);
                left++
            }else{
                right--;
                if(rightMax > height[right]){
                    let currWater = rightMax - height[right];
                    trappedWater += currWater;
                }
                rightMax = Math.max(rightMax, height[right]);
            } 
        }
        return trappedWater;
    }
}
