class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];

        for(let i = 0; i <= nums.length - k; i++){
            let arr = nums.slice(i,i+k);
            res.push(Math.max(...arr));
        }

        return res;
    }
}
