class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalArea = 0;
        let lMax = height[0];
        let rMax = Math.max(...height);

        for(let i = 0; i < height.length; i++){
            if(height[i] > lMax){
                lMax = height[i];
            }

            if(height[i] === rMax){
                let rightSide = height.slice(i+1);
                rMax = rightSide.length > 0 ? Math.max(...rightSide) : 0;
            }

            let water = Math.min(lMax, rMax) - height[i];

            if (water > 0) {
                totalArea += water;
            }
        }


        return totalArea;
    }
}
