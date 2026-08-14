class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];

        for(let i = 0; i < nums.length; i++){
            let temp = nums[i];
            nums[i] = 1;
            res.push(nums.reduce((accumulator, current) => accumulator * current, 1));
            nums[i] = temp;
        }

        return res;
    }
}
