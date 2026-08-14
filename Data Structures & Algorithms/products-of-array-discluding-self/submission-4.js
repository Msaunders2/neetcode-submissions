class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let suffix = 1;
        res[0] = 1;

        for(let i = 1; i < nums.length; i++){
            res[i] = nums[i-1] * res[i-1];
        }

        for(let i = nums.length -1; i >= 0; i--){
            res[i] *= suffix;
            suffix *= nums[i];
        }
        
        return res;
    }
}
