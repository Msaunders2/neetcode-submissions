class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0;
        let res = Infinity;
        let start = 0;

        for(let end = 0; end < nums.length; end++){
            sum += nums[end];

            while(sum >= target){
                res = Math.min(res, end - start + 1);
                sum -= nums[start];
                start++; 
            }
        }

        if(res === Infinity){
            return 0;
        }

        return res;
    }
}
