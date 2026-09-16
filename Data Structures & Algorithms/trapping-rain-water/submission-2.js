class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1;

        let leftMax = height[0];
        let rightMax = height[height.length - 1];

        let res = 0;

        while(left < right){

            if(leftMax <= rightMax){
                if(leftMax > height[left]){
                    let currTrappedWater = leftMax - height[left];
                    // console.log("adding water",currTrappedWater)
                    res += currTrappedWater;
                    
                }
                leftMax = Math.max(leftMax,height[left]);
                // console.log("on left", leftMax);
                left++;

            }else{
                right--;

                if(rightMax > height[right]){
                    let currTrappedWater2 = rightMax - height[right];
                    // console.log("adding Water", currTrappedWater2)
                    res += currTrappedWater2;
                }
                rightMax = Math.max(rightMax,height[right]);
                // console.log("on right", rightMax);
            }
            // console.log("res", res);
        }

        return res;

    }
}
